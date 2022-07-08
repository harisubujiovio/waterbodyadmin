import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../_model/presentation/UserProfile';
import { UserSecret } from '../_model/presentation/usersecret';
import { UserViewModel } from '../_model/presentation/UserViewModel';
import { Profile } from '../_model/Profile';
import { User } from '../_model/User';
import { handleError } from '../_utils/errorhandler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(roleId: string, sortField: string, sortOrder: string, filterValue: string,
    pageNumber = 0, pageSize = 10): Observable<UserViewModel> {
    let offset = pageNumber * pageSize
    sortField = sortOrder == 'desc' ? '-' + 'user__' + sortField : 'user__' + sortField
    let params = new HttpParams()
    .set('offset', offset.toString())
    .set('limit', pageSize.toString())
    .set('search', filterValue.toString())
    .set('ordering', sortField.toString());

    if (roleId != '')
    params = new HttpParams()
    .set('offset', offset.toString())
    .set('limit', pageSize.toString())
    .set('search', filterValue.toString())
    .set('ordering', sortField.toString())
    .set('roleId', roleId.toString());

    return this.http.get<UserViewModel>(`${environment.apiUrl}/waterBodyAdmin/allusers/?${params.toString()}`).pipe(
      catchError(handleError<UserViewModel>('getUsers'))
    );
  }
  getById(id: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${environment.apiUrl}/waterBodyAdmin/userprofile/${id}`).pipe(
      tap(response => 
        {
            console.log(response)
        })
    );
  }
  createUser(user: User) : Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/users/`, user);
  }
  createUserProfile(profile: Profile) : Observable<Profile> {
    return this.http.post<Profile>(`${environment.apiUrl}/waterBodyAdmin/userprofile/`, profile);
  }
  updateUser(id: string,userId: number, userProfile: UserProfile) : Observable<UserProfile> {
    console.log(userProfile)
    return this.http.patch<UserProfile>(`${environment.apiUrl}/waterBodyAdmin/userprofile/${id}/updateuser/${userId}/`, userProfile);
  }
  deleteRole(id: string,userId: number) {
    return this.http.delete<User>(`${environment.apiUrl}/waterBodyAdmin/userprofile/${id}/user/${userId}/`);
  }

  getAddressByPinCode(pincode: number) : Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/waterBodyAdmin/address/?pincode=${pincode}`);
  }
 
}
