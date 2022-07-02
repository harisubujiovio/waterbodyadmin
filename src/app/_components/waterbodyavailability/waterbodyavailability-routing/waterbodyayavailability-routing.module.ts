import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyavailabilityListComponent } from '../waterbodyavailability-list/waterbodyavailability-list.component';
import { WaterbodyavailabilityDetailComponent } from '../waterbodyavailability-detail/waterbodyavailability-detail.component';
import { WaterbodyavailabilityCreateComponent } from '../waterbodyavailability-create/waterbodyavailability-create.component';

export const routes: Routes = [
    { path: '', component: WaterbodyavailabilityListComponent },
    { path: 'create', component: WaterbodyavailabilityCreateComponent },
    { path: 'edit/:id', component: WaterbodyavailabilityCreateComponent},
    { path: 'details/:id', component: WaterbodyavailabilityDetailComponent }
  ];
  
