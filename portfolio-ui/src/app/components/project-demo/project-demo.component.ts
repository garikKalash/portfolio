import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-demo',
  templateUrl: './project-demo.component.html',
  styleUrls: ['./project-demo.component.css']
})
export class ProjectDemoComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) {
    if (!this.userService.userValue) {
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

}
