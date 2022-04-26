import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TankListComponent } from '../tank-list/tank-list.component';
import { TankCreateComponent } from '../tank-create/tank-create.component';
import { TankDetailComponent } from '../tank-detail/tank-detail.component';

export const routes: Routes = [
    { path: 'tanks', component: TankListComponent },
    { path: 'create', component: TankCreateComponent },
    { path: 'edit/:id', component: TankCreateComponent },
    { path: 'details/:id', component: TankDetailComponent }
  ];
  