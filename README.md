ChatGPT

You said:
We have angualr project on server where inside sec assets have temple folder there we have multiple json file we want functionality like any user select that files from server and fech data from json
ChatGPT said:
ChatGPT
You can achieve this functionality in Angular by following these steps:

1. Expose JSON Files on the Server
Ensure the JSON files inside the assets/template/ folder are accessible via HTTP. Angular can fetch them using HttpClient. If they are not accessible, configure your server (e.g., Apache, Nginx, or Node.js Express) to serve static files.

2. Fetch Available JSON Files
If filenames are dynamic, you need an API or a server-side script to list all JSON files inside assets/template/.

For example, in Node.js Express, you can write an endpoint to list files:

const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const templatePath = path.join(__dirname, 'assets/template');

app.get('/api/templates', (req, res) => {
    fs.readdir(templatePath, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to fetch files' });
        }
        res.json(files.filter(file => file.endsWith('.json'))); // Return only JSON files
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
3. Create Angular Service to Fetch JSON Data
Create an Angular service to fetch available JSON files and their content.

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  private basePath = 'assets/template/'; // Update if fetching from API

  constructor(private http: HttpClient) {}

  // Get available JSON filenames
  getTemplates(): Observable<string[]> {
    return this.http.get<string[]>('/api/templates'); // API call to get filenames
  }

  // Fetch JSON file data
  getTemplateData(filename: string): Observable<any> {
    return this.http.get<any>(`${this.basePath}${filename}`);
  }
}
4. Create Angular Component
Allow users to select a file and fetch its content.

import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.css']
})
export class TemplateSelectorComponent implements OnInit {
  templates: string[] = [];
  selectedTemplate: string = '';
  templateData: any = null;

  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    this.templateService.getTemplates().subscribe(files => {
      this.templates = files;
    });
  }

  onSelectTemplate() {
    if (this.selectedTemplate) {
      this.templateService.getTemplateData(this.selectedTemplate).subscribe(data => {
        this.templateData = data;
      });
    }
  }
}
5. Create HTML UI
template-selector.component.html

<div>
  <label>Select JSON File:</label>
  <select [(ngModel)]="selectedTemplate">
    <option *ngFor="let file of templates" [value]="file">{{ file }}</option>
  </select>
  <button (click)="onSelectTemplate()">Load Data</button>
</div>

<div *ngIf="templateData">
  <h3>JSON Data:</h3>
  <pre>{{ templateData | json }}</pre>
</div>
6. Add FormsModule in app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';

@NgModule({
  declarations: [AppComponent, TemplateSelectorComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
Final Outcome
The user can select a JSON file from a dropdown list.
The app fetches the JSON data from assets/template/.
The data is displayed in the UI.
Would you like any enhancements, such as filtering or file search?











ChatGPT can make mistakes. Check important 
