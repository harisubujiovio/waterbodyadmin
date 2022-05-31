import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodybundListComponent } from '../waterbodybund-list/waterbodybund-list.component';
import { WaterbodybundCreateComponent } from '../waterbodybund-create/waterbodybund-create.component';
import { WaterbodybundDetailComponent } from '../waterbodybund-detail/waterbodybund-detail.component';


export const routes: Routes = [
    { path: '', component: WaterbodybundListComponent },
    { path: 'create', component: WaterbodybundCreateComponent },
    { path: 'edit/:id', component: WaterbodybundCreateComponent },
    { path: 'details/:id', component: WaterbodybundDetailComponent }
  ];
  
