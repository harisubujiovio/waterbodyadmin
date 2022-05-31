import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodytypeListComponent } from '../waterbodytype-list/waterbodytype-list.component';
import { WaterbodytypeCreateComponent } from '../waterbodytype-create/waterbodytype-create.component';
import { WaterbodytypeDetailComponent } from '../waterbodytype-detail/waterbodytype-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodytypeListComponent },
    { path: 'create', component: WaterbodytypeCreateComponent },
    { path: 'edit/:id', component: WaterbodytypeCreateComponent },
    { path: 'details/:id', component: WaterbodytypeDetailComponent }
  ];
  
