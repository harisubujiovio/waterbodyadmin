import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodystreamissueListComponent } from '../waterbodystreamissue-list/waterbodystreamissue-list.component';
import { WaterbodystreamissueCreateComponent } from '../waterbodystreamissue-create/waterbodystreamissue-create.component';
import { WaterbodystreamissueDetailComponent } from '../waterbodystreamissue-detail/waterbodystreamissue-detail.component';

export const routes: Routes = [
    { path: '', component: WaterbodystreamissueListComponent },
    { path: 'create', component: WaterbodystreamissueCreateComponent },
    { path: 'edit/:id', component: WaterbodystreamissueCreateComponent },
    { path: 'details/:id', component: WaterbodystreamissueDetailComponent }
  ];
  
