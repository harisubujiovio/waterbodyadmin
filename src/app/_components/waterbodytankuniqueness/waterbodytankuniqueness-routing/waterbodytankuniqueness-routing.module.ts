import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodytankuniquenessListComponent } from '../waterbodytankuniqueness-list/waterbodytankuniqueness-list.component';
import { WaterbodytankuniquenessCreateComponent } from '../waterbodytankuniqueness-create/waterbodytankuniqueness-create.component';
import { WaterbodytankuniquenessDetailComponent } from '../waterbodytankuniqueness-detail/waterbodytankuniqueness-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodytankuniquenessListComponent },
    { path: 'create', component: WaterbodytankuniquenessCreateComponent },
    { path: 'edit/:id', component: WaterbodytankuniquenessCreateComponent },
    { path: 'details/:id', component: WaterbodytankuniquenessDetailComponent }
  ];
  
