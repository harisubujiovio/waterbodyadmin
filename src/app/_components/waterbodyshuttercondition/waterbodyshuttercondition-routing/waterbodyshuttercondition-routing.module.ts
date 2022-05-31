import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyshutterconditionListComponent } from '../waterbodyshuttercondition-list/waterbodyshuttercondition-list.component';
import { WaterbodyshutterconditionCreateComponent } from '../waterbodyshuttercondition-create/waterbodyshuttercondition-create.component';
import { WaterbodyshutterconditionDetailComponent } from '../waterbodyshuttercondition-detail/waterbodyshuttercondition-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyshutterconditionListComponent },
    { path: 'create', component: WaterbodyshutterconditionCreateComponent },
    { path: 'edit/:id', component: WaterbodyshutterconditionCreateComponent },
    { path: 'details/:id', component: WaterbodyshutterconditionDetailComponent }
  ];
  
