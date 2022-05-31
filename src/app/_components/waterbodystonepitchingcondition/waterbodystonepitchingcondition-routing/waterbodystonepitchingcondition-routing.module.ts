import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodystonepitchingconditionListComponent } from '../waterbodystonepitchingcondition-list/waterbodystonepitchingcondition-list.component';
import { WaterbodystonepitchingconditionCreateComponent } from '../waterbodystonepitchingcondition-create/waterbodystonepitchingcondition-create.component';


export const routes: Routes = [
    { path: '', component: WaterbodystonepitchingconditionListComponent },
    { path: 'create', component: WaterbodystonepitchingconditionCreateComponent },
    { path: 'edit/:id', component: WaterbodystonepitchingconditionCreateComponent },
    { path: 'details/:id', component: WaterbodystonepitchingconditionListComponent }
  ];
  
