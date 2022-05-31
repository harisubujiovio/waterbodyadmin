import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodysurplusweirListComponent } from '../waterbodysurplusweir-list/waterbodysurplusweir-list.component';
import { WaterbodysurplusweirCreateComponent } from '../waterbodysurplusweir-create/waterbodysurplusweir-create.component';
import { WaterbodysurplusweirDetailComponent } from '../waterbodysurplusweir-detail/waterbodysurplusweir-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodysurplusweirListComponent },
    { path: 'create', component: WaterbodysurplusweirCreateComponent },
    { path: 'edit/:id', component: WaterbodysurplusweirCreateComponent },
    { path: 'details/:id', component: WaterbodysurplusweirDetailComponent }
  ];
  
