import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import {FileService} from '../../../../services/file.service';

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  @ViewChild('fileInput')
  myInputVariable: ElementRef;

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.fileService.upload(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.currentFileUpload = null;
        this.selectedFiles = null;
        this.myInputVariable.nativeElement.value = null;
      }
    });

    this.selectedFiles = undefined;
  }

}
