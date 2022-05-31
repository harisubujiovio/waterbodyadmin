import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyayacutnoncultivationListComponent } from '../waterbodyayacutnoncultivation-list/waterbodyayacutnoncultivation-list.component';
import { WaterbodyayacutnoncultivationCreateComponent } from '../waterbodyayacutnoncultivation-create/waterbodyayacutnoncultivation-create.component';
import { WaterbodyayacutnoncultivationDetailComponent } from '../waterbodyayacutnoncultivation-detail/waterbodyayacutnoncultivation-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyayacutnoncultivationListComponent },
    { path: 'create', component: WaterbodyayacutnoncultivationCreateComponent },
    { path: 'edit/:id', component: WaterbodyayacutnoncultivationCreateComponent },
    { path: 'details/:id', component: WaterbodyayacutnoncultivationDetailComponent }
  ];
  
