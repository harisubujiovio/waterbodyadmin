import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyfieldchanneltypeListComponent } from '../waterbodyfieldchanneltype-list/waterbodyfieldchanneltype-list.component';
import { WaterbodyfieldchanneltypeCreateComponent } from '../waterbodyfieldchanneltype-create/waterbodyfieldchanneltype-create.component';
import { WaterbodyfieldchanneltypeDetailComponent } from '../waterbodyfieldchanneltype-detail/waterbodyfieldchanneltype-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyfieldchanneltypeListComponent },
    { path: 'create', component: WaterbodyfieldchanneltypeCreateComponent },
    { path: 'edit/:id', component: WaterbodyfieldchanneltypeCreateComponent },
    { path: 'details/:id', component: WaterbodyfieldchanneltypeDetailComponent }
  ];
  
