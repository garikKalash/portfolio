import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FileService} from '../../services/file.service';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-s3-minio',
  templateUrl: './s3-minio.component.html',
  styleUrls: ['./s3-minio.component.css']
})
export class S3MinioComponent implements OnInit {
  files: string[] = [];
  error: string = null;

  constructor(private userService: UserService,
              private fileService: FileService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'close_custom',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../assets/close.svg')
    );
  }

  ngOnInit(): void {
    this.fileService.files().subscribe(value => {
      this.files = value;
    });
  }

  remove(name) {
    this.fileService.remove(name).subscribe(value => {
        const index = this.files.indexOf(name);
        if (index > -1) {
          this.files.splice(index, 1);
        }
    },
    error1 => {
      this.error = error1.message;
    });
  }



}
