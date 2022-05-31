import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyshutterListComponent } from '../waterbodyshutter-list/waterbodyshutter-list.component';
import { WaterbodyshutterCreateComponent } from '../waterbodyshutter-create/waterbodyshutter-create.component';
import { WaterbodyshutterDetailComponent } from '../waterbodyshutter-detail/waterbodyshutter-detail.component';



export const routes: Routes = [
    { path: '', component: WaterbodyshutterListComponent },
    { path: 'create', component: WaterbodyshutterCreateComponent },
    { path: 'edit/:id', component: WaterbodyshutterCreateComponent },
    { path: 'details/:id', component: WaterbodyshutterDetailComponent }
  ];
  
