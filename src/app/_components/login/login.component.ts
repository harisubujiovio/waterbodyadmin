import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError = '';
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthenticationService) {

  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.createLoginForm();
  }
  login() {
    this.loginError = '';
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.value; }

  authenticate() {
    console.log('login button clicked')
    if (this.loginForm.valid) {
      console.log('login button clicked')
      this.authService.login(this.f.username, this.f.password)
        .subscribe(response => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          const token = (<any>response).access;
          const refreshToken = (<any>response).refresh;
          localStorage.setItem("accessToken", token);
          localStorage.setItem("refreshToken", refreshToken);
          console.log(token)
          console.log(refreshToken)
          this.setUserSession()
         
        });
    }
  }

  setUserSession() {
    this.authService.setSession()
      .subscribe(session => {
        localStorage.setItem("user", JSON.stringify(session));
        this.authService.setUserRolePermissions(session.role)
        .subscribe(accessRights => {
            localStorage.setItem("rolepermissions", JSON.stringify(accessRights));
            this.router.navigate(['/admin/dashboard']);
        });
      })
  }

  resetPassword() {
    console.log("Reset password button clicked");
  }

}
