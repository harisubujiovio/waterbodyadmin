import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyinlettypeListComponent } from '../waterbodyinlettype-list/waterbodyinlettype-list.component';
import { WaterbodyinlettypeCreateComponent } from '../waterbodyinlettype-create/waterbodyinlettype-create.component';
import { WaterbodyinlettypeDetailComponent } from '../waterbodyinlettype-detail/waterbodyinlettype-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyinlettypeListComponent },
    { path: 'create', component: WaterbodyinlettypeCreateComponent },
    { path: 'edit/:id', component: WaterbodyinlettypeCreateComponent },
    { path: 'details/:id', component: WaterbodyinlettypeDetailComponent }
  ];
  
