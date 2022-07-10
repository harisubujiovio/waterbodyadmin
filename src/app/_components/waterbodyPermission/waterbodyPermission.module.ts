import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyPermissionComponent } from './waterbody-permission/waterbody-permission.component';
import { routes } from './waterbodyPermission-routing/waterbodyPermission-routing.module';
@NgModule({
  declarations: [
  WaterbodyPermissionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyPermissionModule { }
