import { Component } from '@angular/core';
 import * as xml2js from 'xml2js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 4';
  url = '';
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        //this.url = event.target.result;
      }
    }
  }
   onImport(event) {
    var file = event.srcElement.files[0];
    if (file) {
      console.log(file);
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
          console.log(reader.result);
           xml2js.parseString( reader.result, function (err, result) {
           console.log(result.root.employees[0].element);
           });
            console.dir(result);
           // console.log(JSON.parse(evt.target.result));
        }
        reader.onerror = function (evt) {
            console.log('error reading file');
        }
    }
  }
}
