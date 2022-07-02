import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodycatchmenttypeListComponent } from './waterbodycatchmenttype-list/waterbodycatchmenttype-list.component';
import { WaterbodycatchmenttypeCreateComponent } from './waterbodycatchmenttype-create/waterbodycatchmenttype-create.component';
import { WaterbodycatchmenttypeDetailComponent } from './waterbodycatchmenttype-detail/waterbodycatchmenttype-detail.component';
import { routes } from './waterbodycatchmenttype-routing/waterbodycatchmenttype-routing.module';

@NgModule({
  declarations: [
   WaterbodycatchmenttypeListComponent,
   WaterbodycatchmenttypeCreateComponent,
   WaterbodycatchmenttypeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyCatchmentTypeModule { }
