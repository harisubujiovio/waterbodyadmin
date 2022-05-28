import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './_components/admin/admin.component';
import { LoginComponent } from './_components/login/login.component';
import { AuthGuard } from './_services/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'admin', component: AdminComponent, 
      },

      
    ]
  },
  {
    path: 'role' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/role/role.module').then(m => m.RoleModule)
  },
  {
    path: 'user' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'tank' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/tank/tank.module').then(m => m.TankModule)
  },
  {
    path: 'question' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/surveyQuestion/question.module').then(m => m.QuestionModule)
  },
  {
    path: 'taluk' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/taluks/taluk.module').then(m => m.TalukModule)
  },
  {
    path: 'block' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/block/block.module').then(m => m.BlockModule)
  },
  {
    path: 'panchayat' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/panchayat/panchayat.module').then(m => m.PanchayatModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
