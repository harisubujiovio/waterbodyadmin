import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodybarreltypeListComponent } from '../waterbodybarreltype-list/waterbodybarreltype-list.component';
import { WaterbodybarreltypeCreateComponent } from '../waterbodybarreltype-create/waterbodybarreltype-create.component';
import { WaterbodybarreltypeDetailComponent } from '../waterbodybarreltype-detail/waterbodybarreltype-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodybarreltypeListComponent },
    { path: 'create', component: WaterbodybarreltypeCreateComponent },
    { path: 'edit/:id', component: WaterbodybarreltypeCreateComponent },
    { path: 'details/:id', component: WaterbodybarreltypeDetailComponent }
  ];
  
