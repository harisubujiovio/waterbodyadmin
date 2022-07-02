import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyTankTypeListComponent } from '../waterbodytanktype-list/waterbodytanktype-list.component';
import { WaterbodyTankTypeCreateComponent } from '../waterbodytanktype-create/waterbodytanktype-create.component';
import { WaterbodyTankTypeDetailComponent } from '../waterbodytanktype-detail/waterbodytanktype-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyTankTypeListComponent},
    { path: 'create', component: WaterbodyTankTypeCreateComponent },
    { path: 'edit/:id', component: WaterbodyTankTypeCreateComponent },
    { path: 'details/:id', component: WaterbodyTankTypeDetailComponent}
  ];
  
