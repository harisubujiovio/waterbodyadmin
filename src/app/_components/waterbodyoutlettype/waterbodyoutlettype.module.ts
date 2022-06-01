import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyoutlettypeListComponent } from './waterbodyoutlettype-list/waterbodyoutlettype-list.component';
import { WaterbodyoutlettypeCreateComponent } from './waterbodyoutlettype-create/waterbodyoutlettype-create.component';
import { WaterbodyoutlettypeDetailComponent } from './waterbodyoutlettype-detail/waterbodyoutlettype-detail.component';
import { routes } from './waterbodyoutlettype-routing/waterbodyoutlettype-routing.module';

@NgModule({
  declarations: [
    WaterbodyoutlettypeListComponent,
    WaterbodyoutlettypeCreateComponent,
    WaterbodyoutlettypeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyOutletTypeModule { }
