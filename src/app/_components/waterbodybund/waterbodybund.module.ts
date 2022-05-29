import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodybundListComponent } from './waterbodybund-list/waterbodybund-list.component';
import { WaterbodybundCreateComponent } from './waterbodybund-create/waterbodybund-create.component';
import { WaterbodybundDetailComponent } from './waterbodybund-detail/waterbodybund-detail.component';
import { routes } from './waterbodybund-routing/waterbodybund-routing.module';

@NgModule({
  declarations: [
   WaterbodybundListComponent,
   WaterbodybundCreateComponent,
   WaterbodybundDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyBundModule { }
