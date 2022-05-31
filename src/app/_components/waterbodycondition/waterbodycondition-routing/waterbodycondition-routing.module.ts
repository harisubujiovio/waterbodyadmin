import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyconditionListComponent } from '../waterbodycondition-list/waterbodycondition-list.component';
import { WaterbodyconditionCreateComponent } from '../waterbodycondition-create/waterbodycondition-create.component';
import { WaterbodyconditionDetailComponent } from '../waterbodycondition-detail/waterbodycondition-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyconditionListComponent },
    { path: 'create', component: WaterbodyconditionCreateComponent },
    { path: 'edit/:id', component: WaterbodyconditionCreateComponent },
    { path: 'details/:id', component: WaterbodyconditionDetailComponent }
  ];
  