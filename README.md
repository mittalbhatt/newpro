ChatGPT

You said:
I save html file in template folder in angualr root directory now I want upload that file on click upload button
ChatGPT said:
ChatGPT
To upload an HTML file saved in the template folder of the Angular project to a server when a button is clicked, you can follow these steps:

1. Move the File to the Assets Folder
Angular projects usually serve static files from the assets folder. Move the template folder inside src/assets to make the file accessible.

src/assets/template/example.html
2. Create an Upload Component
Generate a new Angular component for the upload functionality:

ng generate component upload
3. Load and Upload the File
Modify the upload.component.ts file:

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  constructor(private http: HttpClient) {}

  uploadFile() {
    // Path to your file in the assets folder
    const filePath = 'assets/template/example.html';

    // Fetch the file content
    fetch(filePath)
      .then((response) => response.text())
      .then((fileContent) => {
        // Create a Blob object from the file content
        const blob = new Blob([fileContent], { type: 'text/html' });

        // Create a FormData object for upload
        const formData = new FormData();
        formData.append('file', blob, 'example.html');

        // Make the HTTP POST request to upload the file
        this.http.post('https://your-upload-api-endpoint', formData).subscribe({
          next: (res) => console.log('Upload successful', res),
          error: (err) => console.error('Upload failed', err),
        });
      })
      .catch((error) => {
        console.error('Error reading the file', error);
      });
  }
}
