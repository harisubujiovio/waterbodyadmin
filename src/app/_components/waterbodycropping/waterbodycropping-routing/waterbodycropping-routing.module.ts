import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodycroppingListComponent } from '../waterbodycropping-list/waterbodycropping-list.component';
import { WaterbodycroppingCreateComponent } from '../waterbodycropping-create/waterbodycropping-create.component';
import { WaterbodycroppingDetailComponent } from '../waterbodycropping-detail/waterbodycropping-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodycroppingListComponent },
    { path: 'create', component: WaterbodycroppingCreateComponent },
    { path: 'edit/:id', component: WaterbodycroppingCreateComponent },
    { path: 'details/:id', component: WaterbodycroppingDetailComponent }
  ];
  