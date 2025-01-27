import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @ViewChild('fileInput') fileInput: any; // Reference to the file input
  selectedFile: File | null = null;

  // Trigger file input click programmatically
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  // Handle file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile.name);
    }
  }

  // Upload the selected file
  uploadFile() {
    if (!this.selectedFile) {
      alert('No file selected!');
      return;
    }

    // Prepare FormData to send the selected file
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);

    // Here, you'd make the HTTP request to upload the file
    // this.http.post('upload_url', formData).subscribe(response => {
    //   console.log('File uploaded successfully!', response);
    // });
  }
}
