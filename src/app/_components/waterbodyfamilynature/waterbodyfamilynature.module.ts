import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyfamilynatureListComponent } from './waterbodyfamilynature-list/waterbodyfamilynature-list.component';
import { WaterbodyfamilynatureCreateComponent } from './waterbodyfamilynature-create/waterbodyfamilynature-create.component';
import { WaterbodyfamilynatureDetailComponent } from './waterbodyfamilynature-detail/waterbodyfamilynature-detail.component';
import { routes } from './waterbodyfamilynature-routing/waterbodyfamilynature-routing.module';


@NgModule({
  declarations: [
    WaterbodyfamilynatureListComponent,
    WaterbodyfamilynatureCreateComponent,
    WaterbodyfamilynatureDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyFamilyNatureModule { }
