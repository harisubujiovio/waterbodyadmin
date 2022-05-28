import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { BlockListComponent } from '../block-list/block-list.component';
import { BlockCreateComponent } from '../block-create/block-create.component';
import { BlockDetailComponent } from '../block-detail/block-detail.component';

export const routes: Routes = [
    { path: 'blocks', component: BlockListComponent },
    { path: 'create', component: BlockCreateComponent },
    { path: 'edit/:id', component: BlockCreateComponent },
    { path: 'details/:id', component: BlockDetailComponent }
  ];
  
