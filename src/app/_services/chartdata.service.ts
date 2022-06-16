import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardSummary } from '../_model/presentation/CardSummary';
import { ChartData } from '../_model/presentation/ChartData';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class ChartdataService extends ResourceService<ChartData>{

  constructor(protected override httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/tankMetaData';
  }

  getTankBundleLengthData() {
    return this.httpClient.get<ChartData[]>(`${environment.apiUrl}/waterBodyAdmin/tankMetaData/TankBundLength/`);
  }

  getWaterSpreadLevelData() {
    console.log(`${environment.apiUrl}/waterBodyAdmin/tankMetaData/WaterBodySpreadLevel/`);
    return this.httpClient.get<ChartData[]>(`${environment.apiUrl}/waterBodyAdmin/tankMetaData/WaterBodySpreadLevel/`);
  }

  getCardSummaryData() {
    return this.httpClient.get<CardSummary[]>(`${environment.apiUrl}/waterBodyAdmin/cardsummary`);
  }


}
