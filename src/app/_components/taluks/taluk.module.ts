import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { TalukListComponent } from './taluk-list/taluk-list.component';
import { TalukCreateComponent } from './taluk-create/taluk-create.component';
import { TalukDetailComponent } from './taluk-detail/taluk-detail.component';
import { routes } from './taluk-routing/taluk-routing.module';


@NgModule({
  declarations: [
    TalukListComponent,
    TalukCreateComponent,
    TalukDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TalukModule { }
