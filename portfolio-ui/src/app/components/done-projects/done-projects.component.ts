import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ProjectService} from '../../services/project.service';
import {Router} from '@angular/router';
import {Project} from '../../models/project.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-done-projects',
  templateUrl: './done-projects.component.html',
  styleUrls: ['./done-projects.component.css']
})
export class DoneProjectsComponent implements OnInit {
  newProject: Project = new Project();
  types: string[] = ['own', 'office'];
  itsMe = false;

  projects: Project[] = [];


  constructor(private userService: UserService,
              private router: Router,
              private projectService: ProjectService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (!this.userService.userValue) {
      this.router.navigate(['/login']);
    } else {
      this.itsMe = this.userService.userValue.role === 'me';
    }

    this.projectService.projects().subscribe(value => {
      this.projects = value;
    });

  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3 * 1000,
    });
  }

  save() {
    this.projectService.save(this.newProject).subscribe(value => {
        this.projects.push(value);
        this.newProject = new Project();
    },
      error => {
      this.openSnackBar('Error in during of saving project.', '');
      });
  }

  remove(project) {
    this.projectService.remove(project.id).subscribe(value => {
          const index = this.projects.indexOf(project, 0);
          if (index > -1) {
            this.projects.splice(index, 1);
          }
        },
        error => {
          this.openSnackBar(`Error in during of removing project ${project.name}`, '');
        });
  }

}
