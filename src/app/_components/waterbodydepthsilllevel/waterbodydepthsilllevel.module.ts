import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodydepthsilllevelListComponent } from './waterbodydepthsilllevel-list/waterbodydepthsilllevel-list.component';
import { WaterbodydepthsilllevelCreateComponent } from './waterbodydepthsilllevel-create/waterbodydepthsilllevel-create.component';
import { WaterbodydepthsilllevelDetailComponent } from './waterbodydepthsilllevel-detail/waterbodydepthsilllevel-detail.component';
import { routes } from './waterbodydepthsilllevel-routing/waterbodydetpthsilllevel-routing.module';



@NgModule({
  declarations: [
    WaterbodydepthsilllevelListComponent,
    WaterbodydepthsilllevelCreateComponent,
    WaterbodydepthsilllevelDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyDepthSillLevelModule { }
