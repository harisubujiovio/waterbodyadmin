import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyconditionListComponent } from './waterbodycondition-list/waterbodycondition-list.component';
import { WaterbodyconditionCreateComponent } from './waterbodycondition-create/waterbodycondition-create.component';
import { WaterbodyconditionDetailComponent } from './waterbodycondition-detail/waterbodycondition-detail.component';
import { routes } from './waterbodycondition-routing/waterbodycondition-routing.module';

@NgModule({
  declarations: [
    WaterbodyconditionListComponent,
    WaterbodyconditionCreateComponent,
    WaterbodyconditionDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyConditionModule { }
