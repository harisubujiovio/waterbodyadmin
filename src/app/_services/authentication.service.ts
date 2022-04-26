import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Session } from '../_model/Session';
import { handleError } from '../_utils/errorhandler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject: BehaviorSubject<Session>;

  constructor(private router: Router,
    private http: HttpClient) { 
      this.userSubject = new BehaviorSubject<Session>(JSON.parse(localStorage.getItem('user') || '{}'));
    }

  login(username: any, password: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/auth/jwt/create`, { username, password })
      .pipe(tap(response => {
        console.log(response)
      }),
        catchError(handleError<any>('login', null))
      );
  }

  getAccessToken(token: any): Observable<any> {
    console.log(token);
    return this.http.post(`${environment.apiUrl}/auth/jwt/refresh/`, { token }, { headers: { 'Anonymous': '' } })
      .pipe(tap(response => {
        console.log(response)
      }),
        catchError(handleError<any>('getAccessToken', null))
      );
  }

  setSession(): Observable<Session> {
    return this.http.get<Session>(`${environment.apiUrl}/auth/users/me/`)
      .pipe(map(session => {
        this.userSubject.next(session);
        return session;
      }))
  }

  public get userValue(): Session {
    return this.userSubject.value;
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null) ? true : false;
  }
  signOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.userSubject.next(JSON.parse('{}'));
    this.router.navigate(['/']);
  }
}
