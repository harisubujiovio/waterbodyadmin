import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyTankTypeListComponent } from './waterbodytanktype-list/waterbodytanktype-list.component';
import { WaterbodyTankTypeCreateComponent } from './waterbodytanktype-create/waterbodytanktype-create.component';
import { WaterbodyTankTypeDetailComponent } from './waterbodytanktype-detail/waterbodytanktype-detail.component';
import { routes } from './waterbodytanktype-routing/waterbodytanktype-routing.module';

@NgModule({
  declarations: [
    WaterbodyTankTypeListComponent,
    WaterbodyTankTypeCreateComponent,
    WaterbodyTankTypeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyTankTypeModule { }
