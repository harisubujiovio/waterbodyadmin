import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { WaterbodydepthsilllevelListComponent } from '../waterbodydepthsilllevel-list/waterbodydepthsilllevel-list.component';
import { WaterbodydepthsilllevelCreateComponent } from '../waterbodydepthsilllevel-create/waterbodydepthsilllevel-create.component';
import { WaterbodydepthsilllevelDetailComponent } from '../waterbodydepthsilllevel-detail/waterbodydepthsilllevel-detail.component';


export const routes: Routes = [
    { path: '', component: WaterbodydepthsilllevelListComponent },
    { path: 'create', component: WaterbodydepthsilllevelCreateComponent },
    { path: 'edit/:id', component: WaterbodydepthsilllevelCreateComponent },
    { path: 'details/:id', component: WaterbodydepthsilllevelDetailComponent }
  ];
  
