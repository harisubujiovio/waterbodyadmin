import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodystonepitchingconditionListComponent } from './waterbodystonepitchingcondition-list/waterbodystonepitchingcondition-list.component';
import { WaterbodystonepitchingconditionCreateComponent } from './waterbodystonepitchingcondition-create/waterbodystonepitchingcondition-create.component';
import { WaterbodystonepitchingconditionDetailComponent } from './waterbodystonepitchingcondition-detail/waterbodystonepitchingcondition-detail.component';
import { routes } from './waterbodystonepitchingcondition-routing/waterbodystonepitchingcondition-routing.module';



@NgModule({
  declarations: [
    WaterbodystonepitchingconditionListComponent,
    WaterbodystonepitchingconditionCreateComponent,
    WaterbodystonepitchingconditionDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyStonePitchingConditionModule { }
