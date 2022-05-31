import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyexoticspeciesListComponent } from '../waterbodyexoticspecies-list/waterbodyexoticspecies-list.component';
import { WaterbodyexoticspeciesCreateComponent } from '../waterbodyexoticspecies-create/waterbodyexoticspecies-create.component';
import { WaterbodyexoticspeciesDetailComponent } from '../waterbodyexoticspecies-detail/waterbodyexoticspecies-detail.component';


export const routes: Routes = [
    { path: '', component: WaterbodyexoticspeciesListComponent },
    { path: 'create', component: WaterbodyexoticspeciesCreateComponent },
    { path: 'edit/:id', component: WaterbodyexoticspeciesCreateComponent },
    { path: 'details/:id', component: WaterbodyexoticspeciesDetailComponent }
  ];
  
