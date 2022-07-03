import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/_shared/shared.module';
import { WaterbodyfieldchanneltypeListComponent } from './waterbodyfieldchanneltype-list/waterbodyfieldchanneltype-list.component';
import { WaterbodyfieldchanneltypeCreateComponent } from './waterbodyfieldchanneltype-create/waterbodyfieldchanneltype-create.component';
import { WaterbodyfieldchanneltypeDetailComponent } from './waterbodyfieldchanneltype-detail/waterbodyfieldchanneltype-detail.component';
import { routes } from './waterbodyfieldchanneltype-routing/waterbodyfieldchanneltype-routing.module';
@NgModule({
  declarations: [
    WaterbodyfieldchanneltypeListComponent,
    WaterbodyfieldchanneltypeCreateComponent,
    WaterbodyfieldchanneltypeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class WaterBodyFieldChannelTypeModule { }
