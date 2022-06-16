import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSecret } from 'src/app/_model/presentation/usersecret';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Location } from '@angular/common';
import { MustMatch } from 'src/app/_utils/must-match.validator';

@Component({
  selector: 'app-user-resetpassword',
  templateUrl: './user-resetpassword.component.html',
  styleUrls: ['./user-resetpassword.component.css']
})
export class UserResetpasswordComponent implements OnInit {
  loginError = '';
  resetPasswordForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, 
    private authService: AuthenticationService, private location: Location) {
  }
  createResetPasswordForm() {
    this.resetPasswordForm = this.fb.group({
      currentsecret: ['', [Validators.minLength(8),Validators.required]],
      newsecret: ['', [Validators.minLength(8),Validators.required]],
      confirmsecret: ['', [Validators.minLength(8),Validators.required]]
    },
    {
      validator: MustMatch('newsecret', 'confirmsecret')
    })
  }
  ngOnInit(): void {
    this.createResetPasswordForm();
  }
  // convenience getter for easy access to form fields
  get f() { return this.resetPasswordForm.value; }

  resetPassword() {
    if (this.resetPasswordForm.valid) {
      let secret: UserSecret = {
        current_password: this.resetPasswordForm.get("currentsecret")?.value,
        new_password: this.resetPasswordForm.get("newsecret")?.value,
      }
      this.authService.resetPassword(secret)
        .subscribe(response => {
          this.location.back();
        });
    }
  }
  public onCancel = () => {
    this.location.back();
  }
}
