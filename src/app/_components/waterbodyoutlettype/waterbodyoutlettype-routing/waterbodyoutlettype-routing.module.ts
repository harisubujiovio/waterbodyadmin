import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyoutlettypeListComponent } from '../waterbodyoutlettype-list/waterbodyoutlettype-list.component';
import { WaterbodyoutlettypeCreateComponent } from '../waterbodyoutlettype-create/waterbodyoutlettype-create.component';
import { WaterbodyoutlettypeDetailComponent } from '../waterbodyoutlettype-detail/waterbodyoutlettype-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyoutlettypeListComponent },
    { path: 'create', component: WaterbodyoutlettypeCreateComponent },
    { path: 'edit/:id', component: WaterbodyoutlettypeCreateComponent },
    { path: 'details/:id', component: WaterbodyoutlettypeDetailComponent }
  ];
  
