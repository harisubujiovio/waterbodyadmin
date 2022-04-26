import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from '../question-list/question-list.component';
import { QuestionCreateComponent } from '../question-create/question-create.component';
import { QuestionDetailComponent } from '../question-detail/question-detail.component';

export const routes: Routes = [
    { path: 'questions', component: QuestionListComponent },
    { path: 'create', component: QuestionCreateComponent },
    { path: 'edit/:id', component: QuestionCreateComponent },
    { path: 'details/:id', component: QuestionDetailComponent }
  ];
  
