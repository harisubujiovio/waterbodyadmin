import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { handleError } from '../_utils/errorhandler';

@Injectable({
  providedIn: 'root'
})
export class GeocodeserviceService {

  constructor(protected httpClient: HttpClient) { }

  getReverseGeoCodingDetail(lon :number,lat:number) : Observable<any> {
    let params = new HttpParams()
    .set('format', 'json')
    .set('lon', lon)
    .set('lat', lat);
  return this.httpClient.get<any>(`https://nominatim.openstreetmap.org/reverse?${params.toString()}`)
    .pipe(
      map(response => console.log(response)),
      catchError(handleError<any>('getReverseGeoCodingDetail'))
    );
  }

  getFeatureInfo(featureInfoURL: string) : Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Access-Control-Allow-Headers', 'Content-Type');
    httpHeaders.append('Access-Control-Allow-Methods', 'GET');
    httpHeaders.append('Access-Control-Allow-Origin', '*');
    return this.httpClient.get<any>(featureInfoURL,{ headers:httpHeaders })
    .pipe(
      // map(response => console.log(response)),
      catchError(handleError<any>('getFeatureInfo'))
    );
  }

}
