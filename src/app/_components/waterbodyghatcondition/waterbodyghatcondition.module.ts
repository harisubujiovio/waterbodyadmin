import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyghatconditionListComponent } from './waterbodyghatcondition-list/waterbodyghatcondition-list.component';
import { WaterbodyghatconditionCreateComponent } from './waterbodyghatcondition-create/waterbodyghatcondition-create.component';
import { WaterbodyghatconditionDetailComponent } from './waterbodyghatcondition-detail/waterbodyghatcondition-detail.component';
import { routes } from './waterbodyghatcondition-routing/waterbodyghatcondition-routing.module';

@NgModule({
  declarations: [
    WaterbodyghatconditionListComponent,
    WaterbodyghatconditionCreateComponent,
    WaterbodyghatconditionDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyGhatConditionModule { }
