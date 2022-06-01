import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyfenceconditionListComponent } from './waterbodyfencecondition-list/waterbodyfencecondition-list.component';
import { WaterbodyfenceconditionCreateComponent } from './waterbodyfencecondition-create/waterbodyfencecondition-create.component';
import { WaterbodyfenceconditionDetailComponent } from './waterbodyfencecondition-detail/waterbodyfencecondition-detail.component';
import { routes } from './waterbodyfencecondition-routing/waterbodyfencecondition-routing.module';

@NgModule({
  declarations: [
    WaterbodyfenceconditionListComponent,
    WaterbodyfenceconditionCreateComponent,
    WaterbodyfenceconditionDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyFenceConditionModule { }
