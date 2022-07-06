import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TankMetaData } from '../_model/presentation/TankMetaData';
import { Tank } from '../_model/tank';
import { handleError } from '../_utils/errorhandler';

@Injectable({
  providedIn: 'root'
})
export class TankService {

  constructor(private http: HttpClient) { }

  getTanks(sortField: string, sortOrder: string, filterValue: string,
    pageNumber = 0, pageSize = 10): Observable<Tank> {
    let offset = pageNumber * pageSize
    sortField = sortOrder == 'desc' ? '-' + sortField : sortField
    console.log(`${environment.apiUrl}/waterBodyAdmin/tankImage/?limit=${pageSize}&offset=${offset}&ordering=${sortField}&search=${filterValue}`);

    return this.http.get<Tank>(`${environment.apiUrl}/waterBodyAdmin/tankImage/?limit=${pageSize}&offset=${offset}&ordering=${sortField}&search=${filterValue}`).pipe(
      catchError(handleError<Tank>('getTanks'))
    );
  }

  getById(tankId: string): Observable<TankMetaData> {
    console.log(`${environment.apiUrl}/waterBodyAdmin/tankMetaData/getTankMetaData/${tankId}`);
    return this.http.get<TankMetaData>(`${environment.apiUrl}/waterBodyAdmin/tankMetaData/getTankMetaData/${tankId}`).pipe(
      tap(response => 
        {
            console.log(response)
        })
    );
  }


  createTank(file: any,filename: string,createdBy: string) : Observable<Tank> {
    const formData = new FormData();
    formData.append("image",file);
    formData.append("filename", filename);
    formData.append("createdBy", createdBy);
    return this.http.post<Tank>(`${environment.apiUrl}/waterBodyAdmin/tankImage/`, formData);
  }

  processTankMetaData(id: string) {
    return this.http.get<Tank>(`${environment.apiUrl}/waterBodyAdmin/tankImage/ProcessTankMetaData/${id}/`);
  }

  deleteTank(id: string) {
    return this.http.delete<Tank>(`${environment.apiUrl}/waterBodyAdmin/tankImage/${id}/`);
  }

  
}
