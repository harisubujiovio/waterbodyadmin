import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyownershipCreateComponent } from './waterbodyownership-create/waterbodyownership-create.component';
import { WaterbodyownershipDetailComponent } from './waterbodyownership-detail/waterbodyownership-detail.component';
import { routes } from './waterbodyownership-routing/waterbodyownership-routing.module';
import { WaterbodyownershipListComponent } from './waterbodyownership-list/waterbodyownership-list.component';

@NgModule({
  declarations: [
  WaterbodyownershipListComponent,
  WaterbodyownershipCreateComponent,
  WaterbodyownershipDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyOwnershipModule { }
