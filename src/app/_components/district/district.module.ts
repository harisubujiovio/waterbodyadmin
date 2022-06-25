import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictCreateComponent } from './district-create/district-create.component';
import { DistrictDetailComponent } from './district-detail/district-detail.component';
import { routes } from './district-routing/district-routing.module';



@NgModule({
  declarations: [
   DistrictListComponent,
   DistrictCreateComponent,
   DistrictDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class DistrictModule { }
