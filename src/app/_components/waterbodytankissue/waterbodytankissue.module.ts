import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodytankissueListComponent } from './waterbodytankissue-list/waterbodytankissue-list.component';
import { WaterbodytankissueCreateComponent } from './waterbodytankissue-create/waterbodytankissue-create.component';
import { WaterbodytankissueDetailComponent } from './waterbodytankissue-detail/waterbodytankissue-detail.component';
import { routes } from './waterbodytankissue-routing/waterbodytankissue-routing.module';


@NgModule({
  declarations: [
    WaterbodytankissueListComponent,
    WaterbodytankissueCreateComponent,
    WaterbodytankissueDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyTankIssueModule { }
