import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyinvestmentnatureListComponent } from './waterbodyinvestmentnature-list/waterbodyinvestmentnature-list.component';
import { WaterbodyinvestmentnatureCreateComponent } from './waterbodyinvestmentnature-create/waterbodyinvestmentnature-create.component';
import { WaterbodyinvestmentnatureDetailComponent } from './waterbodyinvestmentnature-detail/waterbodyinvestmentnature-detail.component';
import { routes } from './waterbodyinvestmentnature-routing/waterbodyinvestmentnature-routing.module';

@NgModule({
  declarations: [
   WaterbodyinvestmentnatureListComponent,
   WaterbodyinvestmentnatureCreateComponent,
   WaterbodyinvestmentnatureDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyInvestmentNatureModule { }
