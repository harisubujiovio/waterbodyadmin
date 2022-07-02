import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyavailabilityListComponent } from './waterbodyavailability-list/waterbodyavailability-list.component';
import { WaterbodyavailabilityCreateComponent } from './waterbodyavailability-create/waterbodyavailability-create.component';
import { WaterbodyavailabilityDetailComponent } from './waterbodyavailability-detail/waterbodyavailability-detail.component';
import { routes } from './waterbodyavailability-routing/waterbodyayavailability-routing.module'

@NgModule({
  declarations: [
    WaterbodyavailabilityListComponent,
    WaterbodyavailabilityCreateComponent,
    WaterbodyavailabilityDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterbodyAvailabilityModule { }
