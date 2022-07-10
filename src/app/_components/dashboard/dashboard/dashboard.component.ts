import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartdataService } from 'src/app/_services/chartdata.service';
import { ChartData } from 'src/app/_model/presentation/ChartData';
import { CardSummary } from 'src/app/_model/presentation/CardSummary';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  miniCardData: CardSummary[];
  selectedFeatureProperties : any;
  /** Based on the screen size, switch from standard to one column per row */
cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
   map(({ matches }) => {
     if (matches) {
       return {
         columns: 1,
         miniCard: { cols: 1, rows: 1 },
         chart: { cols: 1, rows: 2 },
         table: { cols: 1, rows: 4 },
       };
     }

    return {
       columns: 4,
       miniCard: { cols: 1, rows: 1 },
       chart: { cols: 2, rows: 2 },
       table: { cols: 2, rows: 3 },
     };
   })
 );

  constructor(private breakpointObserver: BreakpointObserver,private chartdataService: ChartdataService) 
  {
    
  }
  ngOnInit() {
    this.chartdataService.getCardSummaryData().subscribe({
      next: summaryData => {
        this.miniCardData = summaryData;
      }
    });
  } 
  onMapLocationClicked($event:any) { this.selectedFeatureProperties = $event; }
}
