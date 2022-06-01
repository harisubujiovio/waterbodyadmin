import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyinlettypeListComponent } from './waterbodyinlettype-list/waterbodyinlettype-list.component';
import { WaterbodyinlettypeCreateComponent } from './waterbodyinlettype-create/waterbodyinlettype-create.component';
import { routes } from './waterbodyinlettype-routing/waterbodyinlettype-routing.module';
import { WaterbodyinlettypeDetailComponent } from './waterbodyinlettype-detail/waterbodyinlettype-detail.component';

@NgModule({
  declarations: [
    WaterbodyinlettypeListComponent,
    WaterbodyinlettypeCreateComponent,
    WaterbodyinlettypeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyInletTypeModule { }
