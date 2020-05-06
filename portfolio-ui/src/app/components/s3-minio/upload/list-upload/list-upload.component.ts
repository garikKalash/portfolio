import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FileService} from '../../../../services/file.service';

@Component({
  selector: 'app-list-upload',
  templateUrl: './list-upload.component.html',
  styleUrls: ['./list-upload.component.css']
})
export class ListUploadComponent implements OnInit {

  showFile = true;
  fileUploads: Observable<string[]>;
  error: string;

  constructor(private fileService: FileService) {
  }

  ngOnInit() {
    this.showFiles(true);
  }

  showFiles(enable: boolean) {
    this.error = null;
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.fileService.files();
    }
  }

  download(file) {
    this.error = null;
    this.fileService.download(file).subscribe(value => {
        const blob = new Blob([value]);
        if (window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveBlob(blob, file);
        } else {
          const anchor = window.document.createElement('a');
          anchor.href = window.URL.createObjectURL(blob);
          anchor.download = file;
          document.body.appendChild(anchor);
          anchor.click();
          document.body.removeChild(anchor);
          window.URL.revokeObjectURL(anchor.href);
        }

      },
      error => {
        this.error = 'You can not download this file.';
      });
  }

  remove(name) {
    this.error = null;
    this.fileService.remove(name).subscribe(value => {
          this.showFiles(true);
      },
        error => {
        this.error = 'Error during of remove this file.';
      });
  }
}
