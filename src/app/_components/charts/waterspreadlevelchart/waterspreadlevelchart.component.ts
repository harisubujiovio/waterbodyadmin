import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { ChartdataService } from 'src/app/_services/chartdata.service';
@Component({
  selector: 'app-waterspreadlevelchart',
  templateUrl: './waterspreadlevelchart.component.html',
  styleUrls: ['./waterspreadlevelchart.component.css']
})
export class WaterspreadlevelchartComponent implements OnInit, OnDestroy {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  private sub: Subscription;
  public barChartData: ChartDataset[] = [
    { data: [], label: 'Water Spread Level', borderRadius: 20 }
  ];
  public barChartLabels: string[] = [];
  public barChartOptions: ChartConfiguration['options']  = {
    responsive: true,
  };

  public barChartLegend = true;
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [];

  constructor(private chartdataService: ChartdataService) {

  } 
  ngOnInit(): void {
    this.sub = this.chartdataService.getWaterSpreadLevelData().subscribe({
      next: chartDataArray => {
        chartDataArray.forEach(li => {
          this.barChartData[0].data.push(li.data);
          this.barChartLabels.push(li.label);
        });
        this.chart?.update();
      },
    });
  }
  
  // public barChartData: ChartData<'bar'> = {
  //   labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
  //     { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  //   ]
  // };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  // public randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData.datasets[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     Math.round(Math.random() * 100),
  //     56,
  //     Math.round(Math.random() * 100),
  //     40 ];

  //   this.chart?.update();
  // }
   

}
