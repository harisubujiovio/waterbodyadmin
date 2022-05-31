import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodymwlstoneListComponent } from '../waterbodymwlstone-list/waterbodymwlstone-list.component';
import { WaterbodymwlstoneCreateComponent } from '../waterbodymwlstone-create/waterbodymwlstone-create.component';
import { WaterbodymwlstoneDetailComponent } from '../waterbodymwlstone-detail/waterbodymwlstone-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodymwlstoneListComponent },
    { path: 'create', component: WaterbodymwlstoneCreateComponent },
    { path: 'edit/:id', component: WaterbodymwlstoneCreateComponent },
    { path: 'details/:id', component: WaterbodymwlstoneDetailComponent }
  ];
  
