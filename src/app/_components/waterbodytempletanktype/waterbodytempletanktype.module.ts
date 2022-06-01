import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodytempletanktypeListComponent } from './waterbodytempletanktype-list/waterbodytempletanktype-list.component';
import { WaterbodytempletanktypeCreateComponent } from './waterbodytempletanktype-create/waterbodytempletanktype-create.component';
import { WaterbodytempletanktypeDetailComponent } from './waterbodytempletanktype-detail/waterbodytempletanktype-detail.component';
import { routes } from './waterbodytempletanktype-routing/waterbodytempletanktype-routing.module';

@NgModule({
  declarations: [
    WaterbodytempletanktypeListComponent,
    WaterbodytempletanktypeCreateComponent,
    WaterbodytempletanktypeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyTempleTankTypeModule { }
