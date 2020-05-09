import {Component, OnInit, Input} from '@angular/core';
import {FileService} from '../../../../services/file.service';

@Component({
  selector: 'app-details-upload',
  templateUrl: './details-upload.component.html',
  styleUrls: ['./details-upload.component.css']
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: string;

  constructor(private fileService: FileService) {
  }

  ngOnInit() {
  }

  download(file) {
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

    });
  }

}
