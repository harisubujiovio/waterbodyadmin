import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyshutterconditionListComponent } from './waterbodyshuttercondition-list/waterbodyshuttercondition-list.component';
import { WaterbodyshutterconditionCreateComponent } from './waterbodyshuttercondition-create/waterbodyshuttercondition-create.component';
import { WaterbodyshutterconditionDetailComponent } from './waterbodyshuttercondition-detail/waterbodyshuttercondition-detail.component';
import { routes } from './waterbodyshuttercondition-routing/waterbodyshuttercondition-routing.module';

@NgModule({
  declarations: [
    WaterbodyshutterconditionListComponent,
    WaterbodyshutterconditionCreateComponent,
    WaterbodyshutterconditionDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyShutterConditionModule { }
