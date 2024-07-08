const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// Function to install a module if it's not already installed
const ensureModuleInstalled = (moduleName) => {
  try {
    require.resolve(moduleName);
  } catch (e) {
    console.log(`${moduleName} is not installed. Installing...`);
    execSync(`npm install ${moduleName}`, { stdio: 'inherit' });
  }
};

// Ensure prompt-sync is installed
ensureModuleInstalled('prompt-sync');

// Import prompt-sync after ensuring it's installed
const prompt = require('prompt-sync')();

// Function to execute shell commands
const exec = (command) => {
  try {
    console.log(`Executing: ${command}`);
    const output = execSync(command, { stdio: 'pipe' });
    console.log(output.toString());
    return output.toString();
  } catch (error) {
    console.error(`Error executing: ${command}`);
    console.error(error.message);
    if (error.stdout) {
      console.error(error.stdout.toString());
    }
    if (error.stderr) {
      console.error(error.stderr.toString());
    }
    process.exit(1);
  }
};

// Function to check Angular CLI version
const getCurrentAngularCliVersion = () => {
  try {
    const output = execSync('npx ng version', { stdio: 'pipe' });
    console.log('Angular CLI version output:', output.toString());

    const match = output.toString().match(/Angular CLI:\s+(\d+\.\d+\.\d+)/);
    if (match) {
      return match[1];
    } else {
      console.error('Could not parse Angular CLI version.');
      return null;
    }
  } catch (error) {
    console.error('Failed to get Angular CLI version. This might be because Angular CLI is not installed yet.');
    return null;
  }
};

// Prompt user for Angular CLI version
const angularCliVersion = prompt('Enter the Angular CLI version to install (e.g., 16.2.10): ');

// Prompt user for ETP schematics options
const template = prompt('Select the template (e.g., template1): ');
const buicName = prompt('Enter the BUIC name: ');
const angularVersion = prompt('Select the Angular version (e.g., 16): ');

const projectDir = 'wc_financialadvisordetails_new_test';
const packageJsonPath = path.join(projectDir, 'package.json');

// Path to the webpack.config.js file to copy
const webpackConfigSourcePath = path.resolve(__dirname, '../webpack.config.js');
// Path to the new src folder to copy
const newSrcFolderPath = path.resolve(__dirname, 'new_src_folder_path'); // Update this path to the actual new src folder path

try {
  // Step 1: Check and install Angular CLI with the specified version
  const currentVersion = getCurrentAngularCliVersion();
  if (!currentVersion || currentVersion !== angularCliVersion) {
    console.log(`Installing Angular CLI version ${angularCliVersion}...`);
    exec(`npm install -g @angular/cli@${angularCliVersion} --force`);
  } else {
    console.log(`Angular CLI version ${angularCliVersion} is already installed. Skipping installation.`);
  }

  // Check if the project directory already exists
  if (!fs.existsSync(projectDir)) {
    // Step 2: Create a new Angular project
    exec(`npx ng new ${projectDir} --force --style=scss --routing=false`);
  } else {
    console.log(`Project directory '${projectDir}' already exists. Skipping ng new command.`);
  }

  // Navigate into the project directory
  process.chdir(projectDir);

  // Verify package.json exists
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`package.json not found at ${packageJsonPath}`);
  }

  // Step 3: Add ETP Schematics with user input
  const ngAdd = spawnSync('npx', ['ng', 'add', '@etp/schematics@1.0.15-beta.5'], {
    input: `${template}\n${buicName}\n${angularVersion}\n`,
    stdio: 'inherit',
    shell: true,
  });

  if (ngAdd.error) {
    throw ngAdd.error;
  }

 
  // Step 4: Install etp/services dependencies
  exec('npm install @etp/services@5.0.13-lite --force');


  // Step 5: Install additional dependencies
  exec('npm install --save-dev uglifyjs-webpack-plugin --force');

  // Step 6: Update package.json with new scripts
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }

  packageJson.scripts = {
    ...packageJson.scripts,
    "start": "npm run build:buic && http-server ./dist/test-harness",
    "build:buic": "echo 'Building Buic Start' && node node_modules/webpack/bin/webpack.js && echo 'Building Buic Complete'",
    "build": "npm run build:buic && ng build && xcopy \"dist/buic\" \"dist/test-harness/buic\" /s /e /y",
    "lint": "ng lint",
    "prettify": "node node_modules/prettier/bin-prettier.js --config .prettierrc --write \"buic-src/**/*.{ts,html,css}\"",
    "build:buic:watch": "echo 'Building Buic Start' && node node_modules/webpack/bin/webpack.js && xcopy \"dist/buic\" \"dist/test-harness/buic\" /s /e /y && echo 'Building Buic Complete'",
    "build:testharness": "ng build --prod && xcopy \"dist/buic\" \"dist/test-harness/buic\" /s /e /y && node csp.js",
    "watch:buic": "npm-watch build:buic:watch",
    "watch:testharness": "npm-watch build:testharness"
  };
  
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Step 7: Read and modify the custom webpack.config.js file
  if (!fs.existsSync(webpackConfigSourcePath)) {
    throw new Error(`webpack.config.js not found at ${webpackConfigSourcePath}`);
  }
  let webpackConfig = fs.readFileSync(webpackConfigSourcePath, 'utf8');
  if (!webpackConfig.entry) {
    webpackConfig.entry = {};
    webpackConfig.output = {};
    webpackConfig.optimization = {};
  }
  webpackConfig.entry = {
  "cct_synergyweb_financialadvisordetails_ng16_buic": "./test-harness/main.ts",
  "cct_synergyweb_financialadvisordetails_ng16_buic.min": "./test-harness/main.ts",
  }
  webpackConfig.output = {
   path:path.resolve(__dirname,'dist/'),
   filename: "[name].js",
  }
  webpackConfig.optimization = {
    minimize: true,
    minimizer: [new UglifyJsPlugin({
      include: /\.min\.js$/
    })]
   }

  fs.writeFileSync(webpackConfigSourcePath, JSON.stringify(webpackConfig, null, 2));

  // const entryField = prompt('cct_synergyweb_financialadvisordetails_ng16_buic: "./test-harness/main.ts"  ');

  // // Update the entry field dynamically
  // webpackConfig = webpackConfig.replace(/entry:\s*['"].+['"],/, `entry: '${entryField}',`);

  // // Ensure the destination directory exists and write the modified webpack.config.js file
  // const webpackConfigDestPath = path.resolve(process.cwd(), 'webpack.config.js');
  // fs.writeFileSync(webpackConfigDestPath, webpackConfig);

  // Step 8: Remove the existing src folder and copy the new src folder
  const srcFolderPath = path.resolve(process.cwd(), 'src');
  if (fs.existsSync(srcFolderPath)) {
    fs.rmSync(srcFolderPath, { recursive: true, force: true });
    console.log(`Removed existing src folder at ${srcFolderPath}`);
  }

  if (fs.existsSync(newSrcFolderPath)) {
    fs.cpSync(newSrcFolderPath, srcFolderPath, { recursive: true });
    console.log(`Copied new src folder from ${newSrcFolderPath} to ${srcFolderPath}`);
  } else {
    throw new Error(`New src folder not found at ${newSrcFolderPath}`);
  }

   // Step 9: Install  dependencies
  exec('npm install  --force');

    // Step 10: Remove specific import statement from main.ts
    const testHarnessFolderPath = path.resolve(process.cwd(), 'src');
    if (fs.existsSync(testHarnessFolderPath)) {
      fs.rmSync(testHarnessFolderPath, { recursive: true, force: true });
      console.log(`Removed existing src folder at ${testHarnessFolderPath}`);
    }
    const mainTsPath = path.resolve(testHarnessFolderPath, 'main.ts');
    if (fs.existsSync(mainTsPath)) {
      let mainTsContent = fs.readFileSync(mainTsPath, 'utf8');
      mainTsContent = mainTsContent.replace(/import\s+['"]\.\/lookupConfig['"];\s*/g, '');
      fs.writeFileSync(mainTsPath, mainTsContent);
      console.log(`Removed specific import statement from ${mainTsPath}`);
    } else {
      console.log(`main.ts not found at ${mainTsPath}. Skipping import statement removal.`);
    }
  
  console.log('Angular project setup is complete!');
} catch (error) {
  console.error('An unexpected error occurred:', error.message);
  if (error.stack) {
    console.error(error.stack);
  }
}
