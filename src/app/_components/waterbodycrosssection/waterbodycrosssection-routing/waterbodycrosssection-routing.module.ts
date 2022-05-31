import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodycrosssectionListComponent } from '../waterbodycrosssection-list/waterbodycrosssection-list.component';
import { WaterbodycrosssectionCreateComponent } from '../waterbodycrosssection-create/waterbodycrosssection-create.component';
import { WaterbodycrosssectionDetailComponent } from '../waterbodycrosssection-detail/waterbodycrosssection-detail.component';


export const routes: Routes = [
    { path: '', component: WaterbodycrosssectionListComponent },
    { path: 'create', component: WaterbodycrosssectionCreateComponent },
    { path: 'edit/:id', component: WaterbodycrosssectionCreateComponent },
    { path: 'details/:id', component: WaterbodycrosssectionDetailComponent }
  ];
  
