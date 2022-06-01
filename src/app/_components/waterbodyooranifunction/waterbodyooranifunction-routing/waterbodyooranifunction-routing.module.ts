import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyooranifunctionListComponent } from '../waterbodyooranifunction-list/waterbodyooranifunction-list.component';
import { WaterbodyooranifunctionCreateComponent } from '../waterbodyooranifunction-create/waterbodyooranifunction-create.component';
import { WaterbodyooranifunctionDetailComponent } from '../waterbodyooranifunction-detail/waterbodyooranifunction-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyooranifunctionListComponent },
    { path: 'create', component: WaterbodyooranifunctionCreateComponent },
    { path: 'edit/:id', component: WaterbodyooranifunctionCreateComponent },
    { path: 'details/:id', component: WaterbodyooranifunctionDetailComponent }
  ];
  
