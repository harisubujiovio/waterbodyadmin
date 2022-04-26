import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private router: Router, private http: HttpClient, private authService: AuthenticationService) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("Can Activate called")
    const token = localStorage.getItem("accessToken");

    if (token && this.jwtHelper.isTokenExpired(token)) {
      this.router.navigate(["login"]);
      return false;
    }

    return true;

  }

}
