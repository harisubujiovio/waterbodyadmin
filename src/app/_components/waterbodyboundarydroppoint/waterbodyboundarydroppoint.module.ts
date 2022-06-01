import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyboundarydroppointListComponent } from './waterbodyboundarydroppoint-list/waterbodyboundarydroppoint-list.component';
import { WaterbodyboundarydroppointCreateComponent } from './waterbodyboundarydroppoint-create/waterbodyboundarydroppoint-create.component';
import { WaterbodyboundarydroppointDetailComponent } from './waterbodyboundarydroppoint-detail/waterbodyboundarydroppoint-detail.component';
import { routes } from './waterbodyboundarydroppoint-routing/waterbodyboundarydroppoint-routing.module';

@NgModule({
  declarations: [
    WaterbodyboundarydroppointListComponent,
    WaterbodyboundarydroppointCreateComponent,
    WaterbodyboundarydroppointDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterbodyBoundaryDropPointModule { }
