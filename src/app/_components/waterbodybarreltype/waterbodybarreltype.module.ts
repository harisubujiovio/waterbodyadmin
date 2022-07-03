import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodybarreltypeListComponent } from './waterbodybarreltype-list/waterbodybarreltype-list.component';
import { WaterbodybarreltypeCreateComponent } from './waterbodybarreltype-create/waterbodybarreltype-create.component';
import { WaterbodybarreltypeDetailComponent } from './waterbodybarreltype-detail/waterbodybarreltype-detail.component';
import { routes } from './waterbodybarreltype-routing/waterbodybarreltype-routing.module';
@NgModule({
  declarations: [
    WaterbodybarreltypeListComponent,
    WaterbodybarreltypeCreateComponent,
    WaterbodybarreltypeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterbodyBarrelTypeModule { }
