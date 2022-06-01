import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyfencetypeListComponent } from '../waterbodyfencetype-list/waterbodyfencetype-list.component';
import { WaterbodyfencetypeCreateComponent } from '../waterbodyfencetype-create/waterbodyfencetype-create.component';
import { WaterbodyfencetypeDetailComponent } from '../waterbodyfencetype-detail/waterbodyfencetype-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyfencetypeListComponent },
    { path: 'create', component: WaterbodyfencetypeCreateComponent },
    { path: 'edit/:id', component: WaterbodyfencetypeCreateComponent },
    { path: 'details/:id', component: WaterbodyfencetypeDetailComponent }
  ];
  
