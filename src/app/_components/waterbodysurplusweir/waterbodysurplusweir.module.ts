import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodysurplusweirListComponent } from './waterbodysurplusweir-list/waterbodysurplusweir-list.component';
import { WaterbodysurplusweirCreateComponent } from './waterbodysurplusweir-create/waterbodysurplusweir-create.component';
import { WaterbodysurplusweirDetailComponent } from './waterbodysurplusweir-detail/waterbodysurplusweir-detail.component';
import { routes } from './waterbodysurplusweir-routing/waterbodysurplusweir-routing.module';

@NgModule({
  declarations: [
     WaterbodysurplusweirListComponent,
     WaterbodysurplusweirCreateComponent,
     WaterbodysurplusweirDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodySurpluseWeirModule { }
