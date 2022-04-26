import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserProfile } from '../_model/presentation/UserProfile';
import { UserViewModel } from '../_model/presentation/UserViewModel';
import { Profile } from '../_model/Profile';
import { User } from '../_model/User';
import { handleError } from '../_utils/errorhandler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(sortField: string, sortOrder: string, filterValue: string,
    pageNumber = 0, pageSize = 10): Observable<UserViewModel> {
    let offset = pageNumber * pageSize
    sortField = sortOrder == 'desc' ? '-' + 'user__' + sortField : 'user__' + sortField
    console.log(`${environment.apiUrl}/waterBodyAdmin/allusers/?limit=${pageSize}&offset=${offset}&ordering=${sortField}&search=${filterValue}`);

    return this.http.get<UserViewModel>(`${environment.apiUrl}/waterBodyAdmin/allusers/?limit=${pageSize}&offset=${offset}&ordering=${sortField}&search=${filterValue}`).pipe(
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
    return this.http.patch<UserProfile>(`${environment.apiUrl}/waterBodyAdmin/userprofile/${id}/updateuser/${userId}/`, userProfile);
  }
  deleteRole(id: string,userId: number) {
    return this.http.delete<User>(`${environment.apiUrl}/waterBodyAdmin/userprofile/${id}/user/${userId}/`);
  }
}
