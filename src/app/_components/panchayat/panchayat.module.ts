import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { PanchayatsListComponent } from './panchayat-list/panchayats-list.component';
import { PanchayatsCreateComponent } from './panchayat-create/panchayats-create.component';
import { PanchayatsDetailComponent } from './panchayat-detail/panchayats-detail.component';
import { routes } from './panchayat-routing/panchayat-routing.module';


@NgModule({
  declarations: [
    PanchayatsListComponent,
    PanchayatsCreateComponent,
    PanchayatsDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PanchayatModule { }
