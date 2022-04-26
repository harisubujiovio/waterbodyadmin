import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';

export const routes: Routes = [
    { path: 'users', component: UserListComponent },
    { path: 'create', component: UserCreateComponent },
    { path: 'edit/:id', component: UserCreateComponent },
    { path: 'details/:id', component: UserDetailComponent }
  ];
  
