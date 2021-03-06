import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {first} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private snackBar: MatSnackBar,
    public domSanitizer: DomSanitizer
  ) {

  }

  ngOnInit() {
    // redirect to home if already logged in
    if (this.userService.userValue) {
      this.router.navigate(['/home']);
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 3 * 1000,
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  login(role, password) {
    this.submitted = true;

    this.loading = true;
    this.userService.login(role, password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/home']);
        },
        error => {
          if (error.status === 401) {
            this.openSnackBar('Wrong role or password', '');
          } else {
            this.openSnackBar('Something went wrong please contact to Garik!', '');
          }
          this.loading = false;
        });
  }
}
