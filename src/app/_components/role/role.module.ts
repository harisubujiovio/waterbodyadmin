import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { RoleListComponent } from './role-list/role-list.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { routes } from './role-routing/role-routing.module';
import { RoleuserComponent } from './role-detail/role-userdetail/roleuser/roleuser.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [
    RoleListComponent,
    RoleCreateComponent,
    RoleDetailComponent,
    RoleuserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class RoleModule { }
