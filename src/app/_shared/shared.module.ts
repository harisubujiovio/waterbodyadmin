import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SuccessDialogComponent } from './dialogs/success-dialog/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './dialogs/error-dialog/error-dialog/error-dialog.component';
import { AngularMaterialModule } from '../_module/angular-material/angular-material.module';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
 
@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    AngularMaterialModule,
    FlexLayoutModule,
    SuccessDialogComponent,
    ErrorDialogComponent,
    ConfirmationDialogComponent
  ],
  declarations: [SuccessDialogComponent, ErrorDialogComponent,ConfirmationDialogComponent],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent,
    ConfirmationDialogComponent
  ]
})
export class SharedModule { }
