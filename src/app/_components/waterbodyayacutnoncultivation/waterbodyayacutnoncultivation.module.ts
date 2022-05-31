import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyayacutnoncultivationListComponent } from './waterbodyayacutnoncultivation-list/waterbodyayacutnoncultivation-list.component';
import { WaterbodyayacutnoncultivationCreateComponent } from './waterbodyayacutnoncultivation-create/waterbodyayacutnoncultivation-create.component';
import { WaterbodyayacutnoncultivationDetailComponent } from './waterbodyayacutnoncultivation-detail/waterbodyayacutnoncultivation-detail.component';
import { routes } from './waterbodyayacutnoncultivation-routing/waterbodyayacutnoncultivation-routing.module';

@NgModule({
  declarations: [
    WaterbodyayacutnoncultivationListComponent,
    WaterbodyayacutnoncultivationCreateComponent,
    WaterbodyayacutnoncultivationDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterbodyayacutnoncultivationModule { }
