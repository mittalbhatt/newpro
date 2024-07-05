const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

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
    const output = execSync('ng version', { stdio: 'pipe' });
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
const webpackConfigSourcePath = path.resolve(__dirname, 'webpack.config.js');
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

  // Step 4: Install additional dependencies
  exec('npm install --save-dev uglifyjs-webpack-plugin babel-loader @babel/core @babel/preset-env style-loader css-loader sass-loader --force');

  // Step 5: Update package.json with new scripts
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }

  packageJson.scripts = {
    ...packageJson.scripts,
    "start": "npm run build:buic && http-server ./dist/test-harness",
    "build:buic": "echo 'Building Buic Start' && node node_modules/webpack/bin/webpack.js && echo 'Building Buic Complete'",
    // Add other scripts as needed
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  // Step 6: Ensure the destination directory exists and copy the custom webpack.config.js file
  const webpackConfigDestPath = path.resolve(process.cwd(), 'webpack.config.js');
  if (!fs.existsSync(webpackConfigSourcePath)) {
    throw new Error(`webpack.config.js not found at ${webpackConfigSourcePath}`);
  }
  fs.copyFileSync(webpackConfigSourcePath, webpackConfigDestPath);

  // Step 7: Remove the existing src folder and copy the new src folder
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

  console.log('Angular project setup is complete!');
} catch (error) {
  console.error('An unexpected error occurred:', error.message);
  if (error.stack) {
    console.error(error.stack);
  }
}
