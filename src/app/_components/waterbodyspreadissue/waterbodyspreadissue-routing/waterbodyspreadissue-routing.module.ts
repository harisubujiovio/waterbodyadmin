import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyspreadissueListComponent } from '../waterbodyspreadissue-list/waterbodyspreadissue-list.component';
import { WaterbodyspreadissueCreateComponent } from '../waterbodyspreadissue-create/waterbodyspreadissue-create.component';
import { WaterbodyspreadissueDetailComponent } from '../waterbodyspreadissue-detail/waterbodyspreadissue-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyspreadissueListComponent },
    { path: 'create', component: WaterbodyspreadissueCreateComponent },
    { path: 'edit/:id', component: WaterbodyspreadissueCreateComponent },
    { path: 'details/:id', component: WaterbodyspreadissueDetailComponent }
  ];
  
