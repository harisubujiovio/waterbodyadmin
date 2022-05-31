import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodytankissueListComponent } from '../waterbodytankissue-list/waterbodytankissue-list.component';
import { WaterbodytankissueCreateComponent } from '../waterbodytankissue-create/waterbodytankissue-create.component';
import { WaterbodytankissueDetailComponent } from '../waterbodytankissue-detail/waterbodytankissue-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodytankissueListComponent },
    { path: 'create', component: WaterbodytankissueCreateComponent },
    { path: 'edit/:id', component: WaterbodytankissueCreateComponent },
    { path: 'details/:id', component: WaterbodytankissueDetailComponent }
  ];
  
