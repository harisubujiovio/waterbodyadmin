import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyfenceconditionListComponent } from '../waterbodyfencecondition-list/waterbodyfencecondition-list.component';
import { WaterbodyfenceconditionCreateComponent } from '../waterbodyfencecondition-create/waterbodyfencecondition-create.component';
import { WaterbodyfenceconditionDetailComponent } from '../waterbodyfencecondition-detail/waterbodyfencecondition-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyfenceconditionListComponent },
    { path: 'create', component: WaterbodyfenceconditionCreateComponent },
    { path: 'edit/:id', component: WaterbodyfenceconditionCreateComponent },
    { path: 'details/:id', component: WaterbodyfenceconditionDetailComponent }
  ];
  
