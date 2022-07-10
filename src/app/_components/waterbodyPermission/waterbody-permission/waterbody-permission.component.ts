import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/_model/Role';
import { Location } from '@angular/common';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { RoleService } from 'src/app/_services/role.service';
import { UserService } from 'src/app/_services/user.service';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { ResourceDataSource } from 'src/app/_shared/resource-datasource';
import { AccessRights } from 'src/app/_model/presentation/AccessRights';
import { WaterBodyPermissionDataSource } from './waterbodypermission-datasource';
import { AccessrightspermissionService } from 'src/app/_services/accessrightspermission.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { AssignRolePermission } from 'src/app/_model/presentation/AssignRolePermission';
import { SuccessDialogComponent } from 'src/app/_shared/dialogs/success-dialog/success-dialog/success-dialog.component';

@Component({
  selector: 'app-waterbody-permission',
  templateUrl: './waterbody-permission.component.html',
  styleUrls: ['./waterbody-permission.component.css']
})
export class WaterbodyPermissionComponent implements OnInit {
  roles: Role[];
  user: Session;
  dataSource: WaterBodyPermissionDataSource;
  displayedColumns = ["resourcename","permissionname","Assigned"];
  dataLength: number
  permissionForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private authService: AuthenticationService,
    private userService: UserService,
    private waterbodyPermissionService: AccessrightspermissionService,
    private route: ActivatedRoute, private dialog: MatDialog,
    private errorService: ErrorHandlerService,
    private roleService: RoleService) {
    this.user = this.authService.userValue;
    this.roleService.getAllRoles('name', 'asc')
      .subscribe(response => {
        this.roles = response.results
      })
  }
  
  ngOnInit(): void {
    this.permissionForm = this.fb.group({
      role: [null]
    });
    this.dataSource = new WaterBodyPermissionDataSource(this.waterbodyPermissionService);
  }

  filterByRole(value: string) {
    console.log(value)
    this.BindPermissionsByRole(value);
  }

  BindPermissionsByRole(roleId: string) {
    this.dataSource.fetchRolePermissions(
      roleId);
  }
  permissionChanged(ob: MatCheckboxChange,resource: AccessRights) {
    console.log("checked: " + ob.checked);
    if(ob.checked)
    {
      let newRolePermission: AssignRolePermission = {
      role: this.permissionForm.get("role")?.value,
      resource: resource.resource_id,
      permission: resource.permission_id,
      createdBy: this.user.username,
      }
      console.log(newRolePermission)
      this.waterbodyPermissionService.create(newRolePermission)
      .subscribe({
        next: () => {
          console.log('Permission Assigned Successfully')
        },
        error: (error: any) => {
          this.errorService.handleError(error);
          console.log(error)
        }
      })

    }
    else
    {
      this.waterbodyPermissionService.delete(resource.accessright_id).subscribe({
        next: () => {
          console.log('Permission removed successfully')
        },
        error: (error:any) => {
          console.log(error)
          this.errorService.handleError(error);
        }
      });
    }
 } 

}
