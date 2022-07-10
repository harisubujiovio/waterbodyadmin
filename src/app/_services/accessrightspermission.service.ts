import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessRightPermission } from '../_model/presentation/AccessRightPermission';
import { AccessRights } from '../_model/presentation/AccessRights';
import { AssignRolePermission } from '../_model/presentation/AssignRolePermission';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class AccessrightspermissionService extends ResourceService<AssignRolePermission> {
  assigned: Boolean
  constructor(protected override httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/waterbodyAccessRights';
  }
  getRolePermissions(roleId: string) : Observable<AccessRights[]> {
    return this.httpClient.get<AccessRights[]>(`${environment.apiUrl}/waterBodyAdmin/AccessRights/getRolePermissions/${roleId}/`);
  }

  isGranted(roleId:string,resource:string,permission:string) : Observable<Boolean> {
    return this.httpClient.get<Boolean>(`${environment.apiUrl}/waterBodyAdmin/AccessRights/getResourcePermission/${roleId}/${resource}/${permission}`);
  }
}
