import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyirrigationtankfunctionListComponent } from '../waterbodyirrigationtankfunction-list/waterbodyirrigationtankfunction-list.component';
import { WaterbodyirrigationtankfunctionCreateComponent } from '../waterbodyirrigationtankfunction-create/waterbodyirrigationtankfunction-create.component';
import { WaterbodyirrigationtankfunctionDetailComponent } from '../waterbodyirrigationtankfunction-detail/waterbodyirrigationtankfunction-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyirrigationtankfunctionListComponent },
    { path: 'create', component: WaterbodyirrigationtankfunctionCreateComponent },
    { path: 'edit/:id', component: WaterbodyirrigationtankfunctionCreateComponent },
    { path: 'details/:id', component: WaterbodyirrigationtankfunctionDetailComponent }
  ];
  
