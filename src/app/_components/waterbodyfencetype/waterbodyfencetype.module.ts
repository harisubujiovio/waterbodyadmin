import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyfencetypeListComponent } from './waterbodyfencetype-list/waterbodyfencetype-list.component';
import { WaterbodyfencetypeCreateComponent } from './waterbodyfencetype-create/waterbodyfencetype-create.component';
import { WaterbodyfencetypeDetailComponent } from './waterbodyfencetype-detail/waterbodyfencetype-detail.component';
import { routes } from './waterbodyfencetype-routing/waterbodyfencetype-routing.module';

@NgModule({
  declarations: [
    WaterbodyfencetypeListComponent,
    WaterbodyfencetypeCreateComponent,
    WaterbodyfencetypeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyFenceTypeModule { }
