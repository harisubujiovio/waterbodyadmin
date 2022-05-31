import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodystonepitchingListComponent } from '../waterbodystonepitching-list/waterbodystonepitching-list.component';
import { WaterbodystonepitchingCreateComponent } from '../waterbodystonepitching-create/waterbodystonepitching-create.component';
import { WaterbodystonepitchingDetailComponent } from '../waterbodystonepitching-detail/waterbodystonepitching-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodystonepitchingListComponent },
    { path: 'create', component: WaterbodystonepitchingCreateComponent },
    { path: 'edit/:id', component: WaterbodystonepitchingCreateComponent },
    { path: 'details/:id', component: WaterbodystonepitchingDetailComponent }
  ];
  
