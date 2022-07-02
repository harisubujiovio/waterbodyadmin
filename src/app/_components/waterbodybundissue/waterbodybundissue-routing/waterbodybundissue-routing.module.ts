import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodybundissueListComponent } from '../waterbodybundissue-list/waterbodybundissue-list.component';
import { WaterbodybundissueCreateComponent } from '../waterbodybundissue-create/waterbodybundissue-create.component';
import { WaterbodybundissueDetailComponent } from '../waterbodybundissue-detail/waterbodybundissue-detail.component';


export const routes: Routes = [
    { path: '', component: WaterbodybundissueListComponent },
    { path: 'create', component: WaterbodybundissueCreateComponent },
    { path: 'edit/:id', component: WaterbodybundissueCreateComponent },
    { path: 'details/:id', component: WaterbodybundissueDetailComponent }
  ];
  
