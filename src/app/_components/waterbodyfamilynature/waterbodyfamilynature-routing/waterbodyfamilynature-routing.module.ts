import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyfamilynatureListComponent } from '../waterbodyfamilynature-list/waterbodyfamilynature-list.component';
import { WaterbodyfamilynatureCreateComponent } from '../waterbodyfamilynature-create/waterbodyfamilynature-create.component';
import { WaterbodyfamilynatureDetailComponent } from '../waterbodyfamilynature-detail/waterbodyfamilynature-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyfamilynatureListComponent },
    { path: 'create', component: WaterbodyfamilynatureCreateComponent },
    { path: 'edit/:id', component: WaterbodyfamilynatureCreateComponent },
    { path: 'details/:id', component: WaterbodyfamilynatureDetailComponent }
  ];
  
