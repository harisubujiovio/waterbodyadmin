import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/_shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { routes } from './user-routing/user-routing.module';
import { UserResetpasswordComponent } from './user-resetpassword/user-resetpassword/user-resetpassword.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserResetpasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
