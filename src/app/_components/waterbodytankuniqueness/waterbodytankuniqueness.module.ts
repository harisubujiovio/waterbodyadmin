import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodytankuniquenessListComponent } from './waterbodytankuniqueness-list/waterbodytankuniqueness-list.component';
import { WaterbodytankissueCreateComponent } from '../waterbodytankissue/waterbodytankissue-create/waterbodytankissue-create.component';
import { WaterbodytankuniquenessCreateComponent } from './waterbodytankuniqueness-create/waterbodytankuniqueness-create.component';
import { WaterbodytankuniquenessDetailComponent } from './waterbodytankuniqueness-detail/waterbodytankuniqueness-detail.component';
import { routes } from './waterbodytankuniqueness-routing/waterbodytankuniqueness-routing.module';

@NgModule({
  declarations: [
     WaterbodytankuniquenessListComponent,
     WaterbodytankuniquenessCreateComponent,
     WaterbodytankuniquenessDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyTankUniquenessModule { }
