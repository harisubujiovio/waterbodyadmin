import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodystreamissueListComponent } from './waterbodystreamissue-list/waterbodystreamissue-list.component';
import { WaterbodystreamissueCreateComponent } from './waterbodystreamissue-create/waterbodystreamissue-create.component';
import { WaterbodystreamissueDetailComponent } from './waterbodystreamissue-detail/waterbodystreamissue-detail.component';
import { routes } from './waterbodystreamissue-routing/waterbodystreamissue-routing.module';



@NgModule({
  declarations: [
    WaterbodystreamissueListComponent,
    WaterbodystreamissueCreateComponent,
    WaterbodystreamissueDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyStreamIssueModule { }
