import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodystonepitchingListComponent } from './waterbodystonepitching-list/waterbodystonepitching-list.component';
import { WaterbodystonepitchingCreateComponent } from './waterbodystonepitching-create/waterbodystonepitching-create.component';
import { WaterbodystonepitchingDetailComponent } from './waterbodystonepitching-detail/waterbodystonepitching-detail.component';
import { routes } from './waterbodystonepitching-routing/waterbodystonepitching-routing.module';

@NgModule({
  declarations: [
   WaterbodystonepitchingListComponent,
   WaterbodystonepitchingCreateComponent,
   WaterbodystonepitchingDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyStonePitchingModule { }
