import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from 'src/app/_services/role.service';
import { Location } from '@angular/common';
import { first } from 'rxjs';
import { Role } from 'src/app/_model/Role';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Session } from 'src/app/_model/Session';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/_shared/dialogs/success-dialog/success-dialog/success-dialog.component';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {
  loading = false;
  submitted = false;
  id: string;
  isAddMode: boolean;
  user: Session;
  private dialogConfig: any;
  roleForm = this.fb.group({
    name: [null, Validators.required],
    description: [null, Validators.required]

  });
  constructor(private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private roleService: RoleService,
    private authService: AuthenticationService,
    private route: ActivatedRoute, private dialog: MatDialog, private errorService: ErrorHandlerService) {
    this.user = this.authService.userValue;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }

    if (!this.isAddMode) {
      this.roleService.getById(this.id)
        .pipe(first())
        .subscribe(x => this.roleForm.patchValue(x));
    }

  }

  public onCancel = () => {
    this.location.back();
  }
  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.roleForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createRole();
    } else {
      this.updateRole();
    }
  }

  private createRole() {
    let newrole: Role = {
      name: this.roleForm.get("name")?.value,
      description: this.roleForm.get("description")?.value,
      createdBy: this.user.username
    }
    this.roleService.createRole(newrole)
      .pipe(first())
      .subscribe({
        next: () => {
          //this.alertService.success('User added', { keepAfterRouteChange: true });
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
  private updateRole() {
    let updatedrole: Role = {
      name: this.roleForm.get("name")?.value,
      description: this.roleForm.get("description")?.value,
      lastModifiedBy: this.user.username
    }
    this.roleService.updateRole(this.id, updatedrole)
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
