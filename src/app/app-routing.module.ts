import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './_components/admin/admin.component';
import { ChartzoomviewerComponent } from './_components/chartzoomviewer/chartzoomviewer.component';
import { ConfirmpasswordComponent } from './_components/confirmpassword/confirmpassword.component';
import { DashboardComponent } from './_components/dashboard/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './_components/forgetpassword/forgetpassword.component';
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
        path: 'forgetPassword',
        component: ForgetpasswordComponent
      },
      { path: 'password/reset/:uid/:token', component: ConfirmpasswordComponent },
      {
        path: 'admin', component: AdminComponent, 
      },
      {
        path: 'admin', component: AdminComponent, 
        canActivate: [AuthGuard], 
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'chartviewer/:name', component: ChartzoomviewerComponent },
        ]
      }
      
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
    path: 'district' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/district/district.module').then(m => m.DistrictModule)
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
    loadChildren: () => import('./_components/waterbodyexoticspecies/waterbodyexoticspecies.module').then(m => m.WaterBodyExoticSpeciesModule)
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
  {
    path: 'waterbodysluice' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodysluice/waterbodysluice.module').then(m => m.WaterBodySluiceModule)
  },
  {
    path: 'waterbodydepthsilllevel' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodydepthsilllevel/waterbodydepthsilllevel.module').then(m => m.WaterBodyDepthSillLevelModule)
  },
  {
    path: 'waterbodyshutter' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyshutter/waterbodyshutter.module').then(m => m.WaterBodyShutterModule)
  },
  {
    path: 'waterbodycondition' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodycondition/waterbodycondition.module').then(m => m.WaterBodyConditionModule)
  },
  {
    path: 'waterbodyshuttercondition' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyshuttercondition/waterbodyshuttercondition.module').then(m => m.WaterBodyShutterConditionModule)
  },
  {
    path: 'waterbodysurplusweir' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodysurplusweir/waterbodysurplusweir.module').then(m => m.WaterBodySurpluseWeirModule)
  },
  {
    path: 'waterbodymwlstone' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodymwlstone/waterbodymwlstone.module').then(m => m.WaterBodyMwlStoneModule)
  },
  {
    path: 'waterbodyirrigationtankfunction' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyirrigationtankfunction/waterbodyirrigationtankfunction.module').then(m => m.WaterBodyIrrigationTankFunctionModule)
  },
  {
    path: 'waterbodyayacutnoncultivation' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyayacutnoncultivation/waterbodyayacutnoncultivation.module').then(m => m.WaterbodyayacutnoncultivationModule)
  },
  {
    path: 'waterbodycropping' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodycropping/waterbodycropping.module').then(m => m.WaterBodyCroppingModule)
  },
  {
    path: 'waterbodyinvestmentnature' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyinvestmentnature/waterbodyinvestmentnature.module').then(m => m.WaterBodyInvestmentNatureModule)
  },
  {
    path: 'waterbodyfamilynature' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyfamilynature/waterbodyfamilynature.module').then(m => m.WaterBodyFamilyNatureModule)
  },
  {
    path: 'waterbodyfamilydistributionland' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyfamilydistributionland/waterbodyfamilydistributionland.module').then(m => m.WaterBodyFamilyDistributionLandModule)
  },
  {
    path: 'waterbodytankuniqueness' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodytankuniqueness/waterbodytankuniqueness.module').then(m => m.WaterBodyTankUniquenessModule)
  },
  {
    path: 'waterbodyboundarydroppoint' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyboundarydroppoint/waterbodyboundarydroppoint.module').then(m => m.WaterbodyBoundaryDropPointModule)
  },
  {
    path: 'waterbodytempletanktype' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodytempletanktype/waterbodytempletanktype.module').then(m => m.WaterBodyTempleTankTypeModule)
  },
  {
    path: 'waterbodyinlettype' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyinlettype/waterbodyinlettype.module').then(m => m.WaterBodyInletTypeModule)
  },
  {
    path: 'waterbodyslittrap' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyslittrap/waterbodyslittrap.module').then(m => m.WaterBodySlitTrapModule)
  },
  {
    path: 'waterbodyoutlettype' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyoutlettype/waterbodyoutlettype.module').then(m => m.WaterBodyOutletTypeModule)
  },
  {
    path: 'waterbodyghatcondition' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyghatcondition/waterbodyghatcondition.module').then(m => m.WaterBodyGhatConditionModule)
  },
  {
    path: 'waterbodyfencecondition' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyfencecondition/waterbodyfencecondition.module').then(m => m.WaterBodyFenceConditionModule)
  },
  {
    path: 'waterbodyfencetype' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyfencetype/waterbodyfencetype.module').then(m => m.WaterBodyFenceTypeModule)
  },
  {
    path: 'waterbodyooranifunction' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyooranifunction/waterbodyooranifunction.module').then(m => m.WaterBodyOoraniFunctionModule)
  },
  {
    path: 'waterbodytanktype' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyTankType/waterbodytanktype.module').then(m => m.WaterBodyTankTypeModule)
  },
  {
    path: 'waterbodycatchmenttype' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodycatchmenttype/waterbodycatchmenttype.module').then(m => m.WaterBodyCatchmentTypeModule)
  },
  {
    path: 'waterbodyavailability' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyavailability/waterbodyavailability.module').then(m => m.WaterbodyAvailabilityModule)
  },
  {
    path: 'waterbodyspreadissue' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyspreadissue/waterbodyspreadissue.module').then(m => m.WaterBodySpreadIssueModule)
  },
  {
    path: 'waterbodybundissue' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodybundissue/waterbodybundissue.module').then(m => m.WaterBodyBundIssueModule)
  },
  {
    path: 'waterbodyfieldchanneltype' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodyfieldchanneltype/waterbodyfieldchanneltype.module').then(m => m.WaterBodyFieldChannelTypeModule)
  },
  {
    path: 'waterbodybarreltype' , component: AdminComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./_components/waterbodybarreltype/waterbodybarreltype.module').then(m => m.WaterbodyBarrelTypeModule)
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
