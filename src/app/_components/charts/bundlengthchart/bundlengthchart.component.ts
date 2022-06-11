import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChartDataset, ChartType,ChartOptions,ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Subscription } from 'rxjs';
import { ChartdataService } from 'src/app/_services/chartdata.service';
@Component({
  selector: 'app-bundlengthchart',
  templateUrl: './bundlengthchart.component.html',
  styleUrls: ['./bundlengthchart.component.css']
})
export class BundlengthchartComponent implements OnInit, OnDestroy {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  private sub: Subscription;
  public lineChartData: ChartDataset[] = [
    { data: [], label: 'Tank Bund Length', borderRadius: 20 }
  ];
  public lineChartLabels: string[] = [];
  public lineChartOptions: ChartConfiguration['options']  = {
    responsive: true,
  };

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [];

  constructor(private chartdataService: ChartdataService) { }

  ngOnInit() {
   this.sub = this.chartdataService.getTankBundleLengthData().subscribe({
      next: chartDataArray => {
        chartDataArray.forEach(li => {
          this.lineChartData[0].data.push(li.data);
          this.lineChartLabels.push(li.label);
        });
        this.chart?.update();
      },
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
