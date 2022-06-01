import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodyboundarydroppointListComponent } from '../waterbodyboundarydroppoint-list/waterbodyboundarydroppoint-list.component';
import { WaterbodyboundarydroppointCreateComponent } from '../waterbodyboundarydroppoint-create/waterbodyboundarydroppoint-create.component';
import { WaterbodyboundarydroppointDetailComponent } from '../waterbodyboundarydroppoint-detail/waterbodyboundarydroppoint-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodyboundarydroppointListComponent },
    { path: 'create', component: WaterbodyboundarydroppointCreateComponent },
    { path: 'edit/:id', component: WaterbodyboundarydroppointCreateComponent },
    { path: 'details/:id', component: WaterbodyboundarydroppointDetailComponent }
  ];
  
