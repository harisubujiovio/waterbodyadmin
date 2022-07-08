import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { UserService } from 'src/app/_services/user.service';
import { Session } from 'src/app/_model/Session';
import { first, map } from 'rxjs';
import { SuccessDialogComponent } from 'src/app/_shared/dialogs/success-dialog/success-dialog/success-dialog.component';
import { User } from 'src/app/_model/User';
import { Profile } from 'src/app/_model/Profile';
import { MustMatch } from 'src/app/_utils/must-match.validator';
import { UserProfile } from 'src/app/_model/presentation/UserProfile';
import { Role } from 'src/app/_model/Role';
import { RoleViewModel } from 'src/app/_model/presentation/RoleViewModel';
import { RoleService } from 'src/app/_services/role.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  loading = false;
  submitted = false;
  id: string;
  user_id: number;
  isAddMode: boolean;
  formTitle: string;
  user: Session;
  roles: Role[];
  private dialogConfig: any;
  userForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private userService: UserService,
    private authService: AuthenticationService,
    private route: ActivatedRoute, private dialog: MatDialog,
    private errorService: ErrorHandlerService,
    private roleService: RoleService) {
    this.user = this.authService.userValue;
    this.roleService.getAllRoles('name', 'asc')
      .subscribe(response => {
        this.roles = response.results
      })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.formTitle = this.isAddMode ? 'Add User' : 'Edit User'
    // password not required in edit mode
    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;
    this.userForm = this.fb.group({
      username: [null, Validators.required],
      password: ['', [Validators.minLength(8), this.isAddMode ? Validators.required : Validators.nullValidator]],
      confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator],
      first_name: [null, Validators.required],
      last_name: [null],
      email: [null],
      mobileNumber: [null, [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      pincode: [null, [Validators.maxLength(6)]],
      address: [null, Validators.required],
      role: [null, Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }


    if (!this.isAddMode) {
      this.userService.getById(this.id)
        .pipe(first())
        .subscribe((x: UserProfile) => {
          console.log(x);
          this.userForm.patchValue(x)
          this.user_id = x.user_id
        });
    }

  }

  public onCancel = () => {
    console.log(this.userForm);
    this.location.back();
  }
  public onRetriveAddress = () => {
    if(this.userForm.get("pincode")?.value)
    {
      this.userService.getAddressByPinCode(this.userForm.get("pincode")?.value)
      .pipe(first())
        .subscribe((addressResponse: any) => {
          if(addressResponse == 'No address found for given pincode')
           this.userForm.patchValue({
               address: ''
            });
          else
          {
             this.userForm.patchValue({
              address: addressResponse.Name + ',' + addressResponse.Block + ',' + addressResponse.District + ',' + addressResponse.Region + ',' + addressResponse.State
            });
          }
            
        });
    }
  }
  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.userForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }
  private createUser() {
    let newuser: User = {
      username: this.userForm.get("username")?.value,
      password: this.userForm.get("password")?.value,
      first_name: this.userForm.get("first_name")?.value,
      last_name: this.userForm.get("last_name")?.value,
      email: this.userForm.get("email")?.value
    }
    this.userService.createUser(newuser)
      .pipe(first())
      .subscribe({
        next: (response: User) => {
          console.log(response.id);
          let newuserProfile: Profile = {
            mobileNumber: this.userForm.get("mobileNumber")?.value,
            pincode: this.userForm.get("pincode")?.value,
            address: this.userForm.get("address")?.value,
            createdBy: this.user.username,
            user_id: response.id,
            role: this.userForm.get("role")?.value
          }
          this.userService.createUserProfile(newuserProfile)
            .subscribe({
              next: () => {
                let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

                //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
                dialogRef.afterClosed()
                  .subscribe(result => {
                    this.location.back();
                  });

              },
              error: (error: any) => {
                this.errorService.dialogConfig = { ...this.dialogConfig };
                this.errorService.handleError(error);
                this.loading = false;
              }
            })

        },
        error: (error: any) => {
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
          this.loading = false;
        }
      });
  }
  private updateUser() {
    let updateduser: UserProfile = {
      username: this.userForm.get("username")?.value,
      first_name: this.userForm.get("first_name")?.value,
      last_name: this.userForm.get("last_name")?.value,
      mobileNumber: this.userForm.get("mobileNumber")?.value,
      pincode: this.userForm.get("pincode")?.value,
      address: this.userForm.get("address")?.value,
      user_id: this.user_id,
      role: this.userForm.get("role")?.value
    }
    console.log(updateduser);
    this.userService.updateUser(this.id, this.user_id, updateduser)
      .pipe(first())
      .subscribe({
        next: () => {
          let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
          dialogRef.afterClosed()
            .subscribe(result => {
              this.location.back();
            });
        },
        error: error => {
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
          this.loading = false;
        }
      });
  }

}
