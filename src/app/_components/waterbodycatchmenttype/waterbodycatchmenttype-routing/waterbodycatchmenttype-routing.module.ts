import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodycatchmenttypeListComponent } from '../waterbodycatchmenttype-list/waterbodycatchmenttype-list.component';
import { WaterbodycatchmenttypeCreateComponent } from '../waterbodycatchmenttype-create/waterbodycatchmenttype-create.component';
import { WaterbodycatchmenttypeDetailComponent } from '../waterbodycatchmenttype-detail/waterbodycatchmenttype-detail.component';


export const routes: Routes = [
    { path: '', component: WaterbodycatchmenttypeListComponent },
    { path: 'create', component: WaterbodycatchmenttypeCreateComponent },
    { path: 'edit/:id', component: WaterbodycatchmenttypeCreateComponent },
    { path: 'details/:id', component: WaterbodycatchmenttypeDetailComponent }
  ];
  
