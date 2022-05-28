import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TalukListComponent } from '../taluk-list/taluk-list.component';
import { TalukCreateComponent } from '../taluk-create/taluk-create.component';
import { TalukDetailComponent } from '../taluk-detail/taluk-detail.component';

export const routes: Routes = [
    { path: 'taluks', component: TalukListComponent },
    { path: 'create', component: TalukCreateComponent },
    { path: 'edit/:id', component: TalukCreateComponent },
    { path: 'details/:id', component: TalukDetailComponent }
  ];
  
