import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AccessrightspermissionService } from '../_services/accessrightspermission.service';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from '../_services/authentication.service';
import { AccessRights } from '../_model/presentation/AccessRights';
@Directive({
  selector: '[appIsGranted]'
})
export class IsGrantedDirective {
  user: Session;
  rolePermissions: AccessRights[];
  isAssigned: Boolean
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionManager$: AccessrightspermissionService,
    private authService: AuthenticationService
  ) {
    this.user = this.authService.userValue;
    this.rolePermissions = this.authService.userRolePermissions;
  }
  @Input() set appIsGranted(permission: Array<string>) {
    this.isGranted(permission[0], permission[1]);
  }
  private isGranted(resource: string, permission: string) {
    if (this.rolePermissions.length > 0) {
      let permisisonRights = this.rolePermissions.filter(per => per.resourcename === resource
        && per.permissionname === permission && per.accessright_id != undefined)

      if (permisisonRights.length > 0) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
      else {
        this.viewContainer.clear();
      }
    }
    else {
      this.permissionManager$.isGranted(this.user.role, resource, permission)
        .subscribe(value => {
          console.log(value)
          if (value) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          }
          else {
            this.viewContainer.clear();
          }
        });
    }
  }

}
