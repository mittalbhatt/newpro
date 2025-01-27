const express = require('express');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Make sure the uploads folder exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Route to handle file upload
app.post('/upload', (req, res) => {
  const form = new formidable.IncomingForm();

  // Set the upload directory and keep file names intact
  form.uploadDir = uploadsDir;
  form.keepExtensions = true;

  // Parse the incoming form-data
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error('Error parsing the form: ', err);
      return res.status(500).send('Error parsing the form.');
    }

    // files will contain the uploaded file
    const uploadedFile = files.file[0]; // Assuming only one file is uploaded
    console.log('Uploaded file:', uploadedFile);

    res.status(200).send({
      message: 'File uploaded successfully!',
      file: uploadedFile
    });
  });
});

// Serve static files (optional, to serve uploaded files)
app.use('/uploads', express.static(uploadsDir));

// Route to serve a list of available files
app.get('/files', (req, res) => {
  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to read uploads directory.');
    }
    res.json(files); // List all uploaded files
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
