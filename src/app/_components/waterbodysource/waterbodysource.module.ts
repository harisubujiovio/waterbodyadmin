import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodysourceListComponent } from './waterbodysource-list/waterbodysource-list.component';
import { WaterbodysourceCreateComponent } from './waterbodysource-create/waterbodysource-create.component';
import { routes } from './waterbodysource-routing/waterbodysource-routing.module';
import { WaterbodysourceDetailComponent } from './waterbodysource-detail/waterbodysource-detail.component';


@NgModule({
  declarations: [
   WaterbodysourceListComponent,
   WaterbodysourceCreateComponent,
   WaterbodysourceDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodySourceModule { }
