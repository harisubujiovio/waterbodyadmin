import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyshutterListComponent } from './waterbodyshutter-list/waterbodyshutter-list.component';
import { WaterbodyshutterCreateComponent } from './waterbodyshutter-create/waterbodyshutter-create.component';
import { WaterbodyshutterDetailComponent } from './waterbodyshutter-detail/waterbodyshutter-detail.component';
import { routes } from './waterbodyshutter-routing/waterbodyshutter-routing.module';


@NgModule({
  declarations: [
    WaterbodyshutterListComponent,
    WaterbodyshutterCreateComponent,
    WaterbodyshutterDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyShutterModule { }
