import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyspreadissueListComponent } from './waterbodyspreadissue-list/waterbodyspreadissue-list.component';
import { WaterbodyspreadissueCreateComponent } from './waterbodyspreadissue-create/waterbodyspreadissue-create.component';
import { WaterbodyspreadissueDetailComponent } from './waterbodyspreadissue-detail/waterbodyspreadissue-detail.component';
import { routes } from './waterbodyspreadissue-routing/waterbodyspreadissue-routing.module';
@NgModule({
  declarations: [
   WaterbodyspreadissueListComponent,
   WaterbodyspreadissueCreateComponent,
   WaterbodyspreadissueDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodySpreadIssueModule { }
