import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TankService } from 'src/app/_services/tank.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { TankMetaData } from 'src/app/_model/presentation/TankMetaData';

@Component({
  selector: 'app-tank-detail',
  templateUrl: './tank-detail.component.html',
  styleUrls: ['./tank-detail.component.css']
})
export class TankDetailComponent implements OnInit {
  public tankMetaData$: Observable<TankMetaData>;
  constructor(private router: Router, private activeRoute: ActivatedRoute, private tankService: TankService,
    private location: Location) { 
      console.log("Get Meta Data Atribute method called");
      let tankId: string = this.activeRoute.snapshot.params['id'];
      this.tankMetaData$ = this.tankService.getById(tankId);
    }

    ngOnInit(): void {
      this.getMetaDataAttributeDetails();
    }
    private getMetaDataAttributeDetails = () => {
      // console.log("Get Meta Data Atribute method called");
      // let tankId: string = this.activeRoute.snapshot.params['id'];
      // this.tankMetaData$ = this.tankService.getById(tankId);
      // console.log(this.tankMetaData$);
    }
    public onCancel = () => {
      this.location.back();
    }

}
