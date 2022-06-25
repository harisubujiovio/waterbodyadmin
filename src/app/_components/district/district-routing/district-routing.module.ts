import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DistrictListComponent } from '../district-list/district-list.component';
import { DistrictCreateComponent } from '../district-create/district-create.component';
import { DistrictDetailComponent } from '../district-detail/district-detail.component';

export const routes: Routes = [
    { path: 'districts', component: DistrictListComponent },
    { path: 'create', component: DistrictCreateComponent },
    { path: 'edit/:id', component: DistrictCreateComponent },
    { path: 'details/:id', component: DistrictDetailComponent }
  ];
  
