import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyirrigationtankfunctionListComponent } from './waterbodyirrigationtankfunction-list/waterbodyirrigationtankfunction-list.component';
import { WaterbodyirrigationtankfunctionCreateComponent } from './waterbodyirrigationtankfunction-create/waterbodyirrigationtankfunction-create.component';
import { WaterbodyirrigationtankfunctionDetailComponent } from './waterbodyirrigationtankfunction-detail/waterbodyirrigationtankfunction-detail.component';
import { routes } from './waterbodyirrigationtankfunction-routing/waterbodyirrigationtankfunction-routing.module';

@NgModule({
  declarations: [
     WaterbodyirrigationtankfunctionListComponent,
     WaterbodyirrigationtankfunctionCreateComponent,
     WaterbodyirrigationtankfunctionDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyIrrigationTankFunctionModule { }
