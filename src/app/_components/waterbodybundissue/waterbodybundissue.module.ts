import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodybundissueListComponent } from './waterbodybundissue-list/waterbodybundissue-list.component';
import { WaterbodybundissueCreateComponent } from './waterbodybundissue-create/waterbodybundissue-create.component';
import { WaterbodybundissueDetailComponent } from './waterbodybundissue-detail/waterbodybundissue-detail.component';
import { routes } from './waterbodybundissue-routing/waterbodybundissue-routing.module';
@NgModule({
  declarations: [
   WaterbodybundissueListComponent,
   WaterbodybundissueCreateComponent,
   WaterbodybundissueDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyBundIssueModule { }
