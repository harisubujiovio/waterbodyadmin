import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessRightPermission } from '../_model/presentation/AccessRightPermission';
import { AccessRights } from '../_model/presentation/AccessRights';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class AccessrightspermissionService extends ResourceService<AccessRightPermission> {

  constructor(protected override httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/AccessRights';
  }
  getRolePermissions(roleId: string) : Observable<AccessRights[]> {
    console.log(`${environment.apiUrl}/waterBodyAdmin/AccessRights/getRolePermissions/${roleId}/`)
    return this.httpClient.get<AccessRights[]>(`${environment.apiUrl}/waterBodyAdmin/AccessRights/getRolePermissions/${roleId}/`);
  }


}
