import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResetPassword } from 'src/app/_model/presentation/usersecret';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthenticationService,private location: Location) {

  }
  ngOnInit(): void {
    this.createResetPasswordForm();
  }
  // convenience getter for easy access to form fields
  get f() { return this.forgetPasswordForm.value; }
  createResetPasswordForm() {
    this.forgetPasswordForm = this.fb.group({
      email: ['', Validators.required]
    });
  }

  sendEmail() {
    let resetPwd: ResetPassword = {
      email: this.forgetPasswordForm.get("email")?.value
    }
    this.authService.sendPasswordResetNotification(resetPwd)
        .subscribe(response => {
          this.location.back();
        });
  }

}
