import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/_shared/shared.module';
import { TankListComponent } from './tank-list/tank-list.component';
import { TankCreateComponent } from './tank-create/tank-create.component';
import { TankDetailComponent } from './tank-detail/tank-detail.component';
import { routes } from './tank-routing/tank-routing.module';


@NgModule({
  declarations: [
    TankListComponent,
    TankCreateComponent,
    TankDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TankModule { }
