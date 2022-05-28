import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { PanchayatsListComponent } from '../panchayat-list/panchayats-list.component';
import { PanchayatsCreateComponent } from '../panchayat-create/panchayats-create.component';
import { PanchayatsDetailComponent } from '../panchayat-detail/panchayats-detail.component';

export const routes: Routes = [
    { path: 'panchayats', component: PanchayatsListComponent },
    { path: 'create', component: PanchayatsCreateComponent },
    { path: 'edit/:id', component: PanchayatsCreateComponent },
    { path: 'details/:id', component: PanchayatsDetailComponent }
  ];
  
