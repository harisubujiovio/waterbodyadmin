import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { BlockListComponent } from './block-list/block-list.component';
import { BlockCreateComponent } from './block-create/block-create.component';
import { BlockDetailComponent } from './block-detail/block-detail.component';
import { routes } from './block-routing/block-routing.module';


@NgModule({
  declarations: [
    BlockListComponent,
    BlockCreateComponent,
    BlockDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class BlockModule { }
