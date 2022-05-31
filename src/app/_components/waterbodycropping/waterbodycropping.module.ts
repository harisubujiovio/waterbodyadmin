import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodycroppingListComponent } from './waterbodycropping-list/waterbodycropping-list.component';
import { WaterbodycroppingCreateComponent } from './waterbodycropping-create/waterbodycropping-create.component';
import { WaterbodycroppingDetailComponent } from './waterbodycropping-detail/waterbodycropping-detail.component';
import { routes } from './waterbodycropping-routing/waterbodycropping-routing.module';


@NgModule({
  declarations: [
    WaterbodycroppingListComponent,
    WaterbodycroppingCreateComponent,
    WaterbodycroppingDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyCroppingModule { }
