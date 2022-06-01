import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodytempletanktypeListComponent } from '../waterbodytempletanktype-list/waterbodytempletanktype-list.component';
import { WaterbodytempletanktypeCreateComponent } from '../waterbodytempletanktype-create/waterbodytempletanktype-create.component';
import { WaterbodytempletanktypeDetailComponent } from '../waterbodytempletanktype-detail/waterbodytempletanktype-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodytempletanktypeListComponent },
    { path: 'create', component: WaterbodytempletanktypeCreateComponent },
    { path: 'edit/:id', component: WaterbodytempletanktypeCreateComponent },
    { path: 'details/:id', component: WaterbodytempletanktypeDetailComponent }
  ];
  
