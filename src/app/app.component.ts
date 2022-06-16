import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Waterbody Admin Portal';
  private path: string = "../assets/images";
  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer){
      this.matIconRegistry
      .addSvgIcon("Users", this.setPath(`${this.path}/Iconawesome-users.svg`))
      .addSvgIcon("WaterBody", this.setPath(`${this.path}/water.svg`))
      .addSvgIcon("Location", this.setPath(`${this.path}/Iconmetro-location.svg`))
      .addSvgIcon("fieldWorkers", this.setPath(`${this.path}/Iconawesome-user-alt.svg`));
     }
     private setPath(url: string): SafeResourceUrl { 
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url); 
     }
  }

