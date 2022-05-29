import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodytypeListComponent } from './waterbodytype-list/waterbodytype-list.component';
import { WaterbodytypeCreateComponent } from './waterbodytype-create/waterbodytype-create.component';
import { WaterbodytypeDetailComponent } from './waterbodytype-detail/waterbodytype-detail.component';
import { routes } from './waterbodytype-routing/waterbodytype-routing.module';



@NgModule({
  declarations: [
  WaterbodytypeListComponent,
  WaterbodytypeCreateComponent,
  WaterbodytypeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyTypeModule { }
