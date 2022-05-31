import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodymwlstoneListComponent } from './waterbodymwlstone-list/waterbodymwlstone-list.component';
import { WaterbodymwlstoneCreateComponent } from './waterbodymwlstone-create/waterbodymwlstone-create.component';
import { WaterbodymwlstoneDetailComponent } from './waterbodymwlstone-detail/waterbodymwlstone-detail.component';
import { routes } from './waterbodymwlstone-routing/waterbodymwlstone-routing.module';
@NgModule({
  declarations: [
  WaterbodymwlstoneListComponent,
  WaterbodymwlstoneCreateComponent,
  WaterbodymwlstoneDetailComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyMwlStoneModule { }
