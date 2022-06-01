import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyslittrapListComponent } from '../waterbodyslittrap-list/waterbodyslittrap-list.component';
import { WaterbodyslittrapCreateComponent } from '../waterbodyslittrap-create/waterbodyslittrap-create.component';
import { WaterbodyslittrapDetailComponent } from '../waterbodyslittrap-detail/waterbodyslittrap-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyslittrapListComponent },
    { path: 'create', component: WaterbodyslittrapCreateComponent },
    { path: 'edit/:id', component: WaterbodyslittrapCreateComponent },
    { path: 'details/:id', component: WaterbodyslittrapDetailComponent }
  ];
  
