import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyooranifunctionListComponent } from './waterbodyooranifunction-list/waterbodyooranifunction-list.component';
import { WaterbodyooranifunctionCreateComponent } from './waterbodyooranifunction-create/waterbodyooranifunction-create.component';
import { WaterbodyooranifunctionDetailComponent } from './waterbodyooranifunction-detail/waterbodyooranifunction-detail.component';
import { routes } from './waterbodyooranifunction-routing/waterbodyooranifunction-routing.module';

@NgModule({
  declarations: [
  WaterbodyooranifunctionListComponent,
  WaterbodyooranifunctionCreateComponent,
  WaterbodyooranifunctionDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyOoraniFunctionModule { }
