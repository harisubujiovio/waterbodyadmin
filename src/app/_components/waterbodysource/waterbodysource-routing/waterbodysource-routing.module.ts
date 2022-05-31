import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodysourceListComponent } from '../waterbodysource-list/waterbodysource-list.component';
import { WaterbodysourceCreateComponent } from '../waterbodysource-create/waterbodysource-create.component';
import { WaterbodysourceDetailComponent } from '../waterbodysource-detail/waterbodysource-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodysourceListComponent },
    { path: 'create', component: WaterbodysourceCreateComponent },
    { path: 'edit/:id', component: WaterbodysourceCreateComponent },
    { path: 'details/:id', component: WaterbodysourceDetailComponent }
  ];
  
