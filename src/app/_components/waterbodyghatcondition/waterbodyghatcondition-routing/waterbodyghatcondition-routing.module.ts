import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyghatconditionListComponent } from '../waterbodyghatcondition-list/waterbodyghatcondition-list.component';
import { WaterbodyghatconditionCreateComponent } from '../waterbodyghatcondition-create/waterbodyghatcondition-create.component';
import { WaterbodyghatconditionDetailComponent } from '../waterbodyghatcondition-detail/waterbodyghatcondition-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyghatconditionListComponent },
    { path: 'create', component: WaterbodyghatconditionCreateComponent },
    { path: 'edit/:id', component: WaterbodyghatconditionCreateComponent },
    { path: 'details/:id', component: WaterbodyghatconditionDetailComponent }
  ];
  
