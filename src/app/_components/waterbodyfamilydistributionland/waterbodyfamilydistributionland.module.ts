import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { routes } from './waterbodyfamilydistributionland-routing/waterbodyfamilydistributionland-routing.module';
import { WaterbodyfamilydistributionlandListComponent } from './waterbodyfamilydistributionland-list/waterbodyfamilydistributionland-list.component';
import { WaterbodyfamilydistributionlandCreateComponent } from './waterbodyfamilydistributionland-create/waterbodyfamilydistributionland-create.component';
import { WaterbodyfamilydistributionlandDetailComponent } from './waterbodyfamilydistributionland-detail/waterbodyfamilydistributionland-detail.component';


@NgModule({
  declarations: [
      WaterbodyfamilydistributionlandListComponent,
      WaterbodyfamilydistributionlandCreateComponent,
      WaterbodyfamilydistributionlandDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyFamilyDistributionLandModule { }
