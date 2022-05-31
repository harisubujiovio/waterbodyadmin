import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyownershipListComponent } from '../waterbodyownership-list/waterbodyownership-list.component';
import { WaterbodyownershipCreateComponent } from '../waterbodyownership-create/waterbodyownership-create.component';
import { WaterbodyownershipDetailComponent } from '../waterbodyownership-detail/waterbodyownership-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyownershipListComponent },
    { path: 'create', component: WaterbodyownershipCreateComponent },
    { path: 'edit/:id', component: WaterbodyownershipCreateComponent },
    { path: 'details/:id', component: WaterbodyownershipDetailComponent }
  ];
  
