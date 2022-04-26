import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RoleViewModel } from '../_model/presentation/RoleViewModel';
import { RoleWithUser } from '../_model/presentation/RoleWithUser';
import { Role } from '../_model/Role';
import { handleError } from '../_utils/errorhandler';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getRoles(sortField: string, sortOrder: string, filterValue: string,
    pageNumber = 0, pageSize = 10): Observable<RoleViewModel> {
    let offset = pageNumber * pageSize
    sortField = sortOrder == 'desc' ? '-' + sortField : sortField
    console.log(`${environment.apiUrl}/waterBodyAdmin/roles/?limit=${pageSize}&offset=${offset}&ordering=${sortField}&search=${filterValue}`);

    return this.http.get<RoleViewModel>(`${environment.apiUrl}/waterBodyAdmin/roles/?limit=${pageSize}&offset=${offset}&ordering=${sortField}&search=${filterValue}`).pipe(
      catchError(handleError<RoleViewModel>('getRoles'))
    );
  }

  getAllRoles(sortField: string, sortOrder: string): Observable<RoleViewModel> {
    console.log("Getroles method hitted");
    sortField = sortOrder == 'desc' ? '-' + sortField : sortField
    console.log(sortField);
    console.log(`${environment.apiUrl}/waterBodyAdmin/roles/?ordering=${sortField}`);

    return this.http.get<RoleViewModel>(`${environment.apiUrl}/waterBodyAdmin/roles/?ordering=${sortField}`).pipe(
      catchError(handleError<RoleViewModel>('getAllRoles'))
    );
  }

  getById(id: string): Observable<RoleWithUser> {
    return this.http.get<RoleWithUser>(`${environment.apiUrl}/waterBodyAdmin/roles/${id}`).pipe(
      tap(response => 
        {
            console.log("Role with users");
            console.log(response)
        })
    );
  }

  createRole(role: Role) : Observable<Role> {
    return this.http.post<Role>(`${environment.apiUrl}/waterBodyAdmin/roles/`, role);
  }

  updateRole(id: string, role: Role) : Observable<Role> {
    return this.http.patch<Role>(`${environment.apiUrl}/waterBodyAdmin/roles/${id}/`, role);
  }

  deleteRole(id: string) {
    return this.http.delete<Role>(`${environment.apiUrl}/waterBodyAdmin/roles/${id}/`);
  }
}
