import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { finalize, Subscription } from 'rxjs';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { TankService } from 'src/app/_services/tank.service';
import { Tank } from 'src/app/_model/tank';
import { SuccessDialogComponent } from 'src/app/_shared/dialogs/success-dialog/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
@Component({
  selector: 'app-tank-create',
  templateUrl: './tank-create.component.html',
  styleUrls: ['./tank-create.component.css']
})
export class TankCreateComponent implements OnInit {
  uploadForm: FormGroup;
  loading = false;
  user: Session;
  private dialogConfig: any;
  constructor(private fb: FormBuilder, 
    private http: HttpClient, 
    private location: Location,
    private authService: AuthenticationService,
    private tankService: TankService, private dialog: MatDialog,
    private errorService: ErrorHandlerService) {
      this.user = this.authService.userValue;
  }
  ngOnInit() {
    this.uploadForm = this.fb.group({
      profile: [''],
      fileName: ''
    });
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const filenameControl = this.uploadForm.get('fileName');
      filenameControl?.setValue(file.name);
      const control = this.uploadForm.get('profile');
      if (control)
        control.setValue(file);
    }
  }
  onSubmit() {
    this.loading = true;
    const control = this.uploadForm.get('profile');
    const filenameControl = this.uploadForm.get('fileName');
    console.log(this.user.username)
    if (control)
      this.tankService.createTank(control.value, filenameControl?.value,this.user.username).subscribe(
        (res: Tank) => {
          console.log(res.id)
          this.tankService.processTankMetaData(res.id)
            .subscribe(
              (presponse: any) => {
                this.loading = false;
                let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

                //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
                dialogRef.afterClosed()
                  .subscribe(result => {
                    this.location.back();
                  });
              },
              (error) => {
                this.errorService.dialogConfig = { ...this.dialogConfig };
                this.errorService.handleError(error);
                this.loading = false;
              }
            )
        },
        (err) => {
          console.log(err)
          this.loading = false;
        }
      );
  }

  public onCancel = () => {
    this.location.back();
  }
}
