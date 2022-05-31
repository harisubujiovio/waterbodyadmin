import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodysluiceListComponent } from '../waterbodysluice-list/waterbodysluice-list.component';
import { WaterbodysluiceCreateComponent } from '../waterbodysluice-create/waterbodysluice-create.component';
import { WaterbodysluiceDetailComponent } from '../waterbodysluice-detail/waterbodysluice-detail.component';


export const routes: Routes = [
    { path: '', component: WaterbodysluiceListComponent },
    { path: 'create', component: WaterbodysluiceCreateComponent },
    { path: 'edit/:id', component: WaterbodysluiceCreateComponent },
    { path: 'details/:id', component: WaterbodysluiceDetailComponent }
  ];
  
