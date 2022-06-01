import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyslittrapListComponent } from './waterbodyslittrap-list/waterbodyslittrap-list.component';
import { WaterbodyslittrapCreateComponent } from './waterbodyslittrap-create/waterbodyslittrap-create.component';
import { WaterbodyslittrapDetailComponent } from './waterbodyslittrap-detail/waterbodyslittrap-detail.component';
import { routes } from './waterbodyslittrap-routing/waterbodyslittrap-routing.module';

@NgModule({
  declarations: [
    WaterbodyslittrapListComponent,
    WaterbodyslittrapCreateComponent,
    WaterbodyslittrapDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodySlitTrapModule { }
