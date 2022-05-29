import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodycrosssectionListComponent } from './waterbodycrosssection-list/waterbodycrosssection-list.component';
import { WaterbodycrosssectionCreateComponent } from './waterbodycrosssection-create/waterbodycrosssection-create.component';
import { WaterbodycrosssectionDetailComponent } from './waterbodycrosssection-detail/waterbodycrosssection-detail.component';
import { routes } from './waterbodycrosssection-routing/waterbodycrosssection-routing.module';


@NgModule({
  declarations: [
   WaterbodycrosssectionListComponent,
   WaterbodycrosssectionCreateComponent,
   WaterbodycrosssectionDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyCrossSectionModule { }
