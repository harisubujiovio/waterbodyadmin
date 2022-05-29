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
  {
    path: 'waterbodytype' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodytype/waterbodytype.module').then(m => m.WaterBodyTypeModule)
  },
  {
    path: 'waterbodyownership' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyownership/waterbodyownership.module').then(m => m.WaterBodyOwnershipModule)
  },
  {
    path: 'waterbodysource' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodysource/waterbodysource.module').then(m => m.WaterBodySourceModule)
  },
  {
    path: 'waterbodycrosssection' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodycrosssection/waterbodycrosssection.module').then(m => m.WaterBodyCrossSectionModule)
  },
  {
    path: 'waterbodystreamissue' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodystreamissue/waterbodystreamissue.module').then(m => m.WaterBodyStreamIssueModule)
  },
  {
    path: 'waterbodyexoticspecies' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyexoticspecies/waterbodyexoticspecies.module').then(m => m.WaterBodyExoticSpecies)
  },
  {
    path: 'waterbodybund' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodybund/waterbodybund.module').then(m => m.WaterBodyBundModule)
  },
  {
    path: 'waterbodytankissue' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodytankissue/waterbodytankissue.module').then(m => m.WaterBodyTankIssueModule)
  },
  {
    path: 'waterbodystonepitching' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodystonepitching/waterbodystonepitching.module').then(m => m.WaterBodyStonePitchingModule)
  },
  {
    path: 'waterbodystonepitchingcondition' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodystonepitchingcondition/waterbodystonepitchingcondition.module').then(m => m.WaterBodyStonePitchingConditionModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
