import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Location } from '@angular/common';
import { ConfirmPassword } from 'src/app/_model/presentation/usersecret';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.css']
})
export class ConfirmpasswordComponent implements OnInit {
  private uid: string = ''
  private token: string = ''
  confirmPasswordForm: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router, private fb: FormBuilder, 
    private authService: AuthenticationService,private location: Location) {

  }
  ngOnInit(): void {
    this.createConfirmPasswordForm();
    this.route.paramMap
    .subscribe(params => {
         this.uid = params.get('uid') || '';
         this.token = params.get('token') || '';
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.confirmPasswordForm.value; }
  createConfirmPasswordForm() {
    this.confirmPasswordForm = this.fb.group({
      new_password: ['', Validators.required]
    });
  }

  resetPassword() {
    let confirmPwd: ConfirmPassword = {
      new_password: this.confirmPasswordForm.get("new_password")?.value,
      uid: this.uid,
      token: this.token
    }
    this.authService.confirmPasswordReset(confirmPwd)
        .subscribe(response => {
          this.router.navigate(['/login']);
        });
  }
}
