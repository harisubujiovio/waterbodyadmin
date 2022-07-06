import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { Session } from 'src/app/_model/Session';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isMenuOpen = true;
  contentMargin = 240;
  currentYear = new Date().getFullYear().toString();
  user: Session;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Medium)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  
  constructor(private breakpointObserver: BreakpointObserver,private authService : AuthenticationService) { 
    this.user = this.authService.userValue;
  }

  ngOnInit(): void {
  }
  onToolBarMenuToggle()
  {
     this.isMenuOpen = !this.isMenuOpen;
     console.log('On toolbar toggled', this.isMenuOpen);

     if(!this.isMenuOpen)
     {
       this.contentMargin = 70;
     }
     else
     {
      this.contentMargin = 240;
     }
  }
  signOut()
  {
    this.authService.signOut();
  }
}
