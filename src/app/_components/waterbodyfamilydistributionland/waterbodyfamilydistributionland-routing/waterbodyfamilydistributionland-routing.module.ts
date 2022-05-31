import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyfamilydistributionlandListComponent } from '../waterbodyfamilydistributionland-list/waterbodyfamilydistributionland-list.component';
import { WaterbodyfamilydistributionlandCreateComponent } from '../waterbodyfamilydistributionland-create/waterbodyfamilydistributionland-create.component';
import { WaterbodyfamilydistributionlandDetailComponent } from '../waterbodyfamilydistributionland-detail/waterbodyfamilydistributionland-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyfamilydistributionlandListComponent },
    { path: 'create', component: WaterbodyfamilydistributionlandCreateComponent },
    { path: 'edit/:id', component: WaterbodyfamilydistributionlandCreateComponent },
    { path: 'details/:id', component: WaterbodyfamilydistributionlandDetailComponent }
  ];
  
