import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodysluiceListComponent } from './waterbodysluice-list/waterbodysluice-list.component';
import { WaterbodysluiceCreateComponent } from './waterbodysluice-create/waterbodysluice-create.component';
import { WaterbodysluiceDetailComponent } from './waterbodysluice-detail/waterbodysluice-detail.component';
import { routes } from './waterbodysluice-routing/waterbodysluice-routing.module';


@NgModule({
  declarations: [
   WaterbodysluiceListComponent,
   WaterbodysluiceCreateComponent,
   WaterbodysluiceDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodySluiceModule { }
