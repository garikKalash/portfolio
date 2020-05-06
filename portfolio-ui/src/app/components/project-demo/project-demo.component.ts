import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {ProjectService} from '../../services/project.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-project-demo',
  templateUrl: './project-demo.component.html',
  styleUrls: ['./project-demo.component.css']
})
export class ProjectDemoComponent implements OnInit {
  techDetails = null;
  showOverlay = true;
  itsHr = false;

  constructor(private userService: UserService,
              private router: Router,
              private projectService: ProjectService,
              private snackBar: MatSnackBar) {
    if (!this.userService.userValue) {
      this.router.navigate(['/login']);
    } else {
      this.itsHr = this.userService.userValue.role === 'hr';
    }
  }

  ngOnInit(): void {
    if (!this.itsHr) {
      this.loadTechDetails('s3_minio');
    }
  }

  loadTechDetails(name) {
    this.techDetails = null;
    this.projectService.techDescription(name).subscribe(value => {
        this.techDetails = value;
      },
      error => {
        this.openSnackBar(`Error in loading technical information. ${error.message}`, '');
        this.showOverlay = false;
      });

  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3 * 1000,
    });
  }

}
