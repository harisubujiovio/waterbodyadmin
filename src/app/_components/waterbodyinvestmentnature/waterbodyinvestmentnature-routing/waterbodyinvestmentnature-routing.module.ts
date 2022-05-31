import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyinvestmentnatureListComponent } from '../waterbodyinvestmentnature-list/waterbodyinvestmentnature-list.component';
import { WaterbodyinvestmentnatureCreateComponent } from '../waterbodyinvestmentnature-create/waterbodyinvestmentnature-create.component';
import { WaterbodyinvestmentnatureDetailComponent } from '../waterbodyinvestmentnature-detail/waterbodyinvestmentnature-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyinvestmentnatureListComponent },
    { path: 'create', component: WaterbodyinvestmentnatureCreateComponent },
    { path: 'edit/:id', component: WaterbodyinvestmentnatureCreateComponent },
    { path: 'details/:id', component: WaterbodyinvestmentnatureDetailComponent }
  ];
  