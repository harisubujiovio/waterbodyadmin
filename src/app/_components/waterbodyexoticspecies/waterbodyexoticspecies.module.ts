import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyexoticspeciesListComponent } from './waterbodyexoticspecies-list/waterbodyexoticspecies-list.component';
import { WaterbodyexoticspeciesCreateComponent } from './waterbodyexoticspecies-create/waterbodyexoticspecies-create.component';
import { WaterbodyexoticspeciesDetailComponent } from './waterbodyexoticspecies-detail/waterbodyexoticspecies-detail.component';
import { routes } from './waterbodyexoticspecies-routing/waterbodyexoticspecies-routing.module';



@NgModule({
  declarations: [
  WaterbodyexoticspeciesListComponent,
  WaterbodyexoticspeciesCreateComponent,
  WaterbodyexoticspeciesDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyExoticSpeciesModule { }
