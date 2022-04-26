import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleListComponent } from '../role-list/role-list.component';
import { RoleCreateComponent } from '../role-create/role-create.component';
import { RoleDetailComponent } from '../role-detail/role-detail.component';

export const routes: Routes = [
    { path: 'roles', component: RoleListComponent },
    { path: 'create', component: RoleCreateComponent },
    { path: 'edit/:id', component: RoleCreateComponent },
    { path: 'details/:id', component: RoleDetailComponent }
  ];
  
