import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { handleError } from '../_utils/errorhandler';

@Injectable({
  providedIn: 'root'
})
export abstract class ResourceService<T> {
  private readonly APIUrl = environment.apiUrl + this.getResourceUrl();

  constructor(protected httpClient: HttpClient) { }
  abstract getResourceUrl(): string;

  toServerModel(entity: T): any {
    return entity;
  }

  fromServerModel(json: any): T {
    return json;
  }

  getList(sortField: string,sortOrder: string,filterValue: string, pageNumber: number, pageSize: number): Observable<T[]> {
    let offset = pageNumber * pageSize
    sortField = sortOrder == 'desc' ? '-' + sortField : sortField
    let params = new HttpParams()
			.set('offset', offset.toString())
			.set('limit', pageSize.toString())
      .set('ordering', sortField.toString());
      console.log(this.APIUrl)
    console.log(`${this.APIUrl}?${params.toString()}`)
    return this.httpClient.get<T[]>(`${this.APIUrl}?${params.toString()}`)
      .pipe(
        //map((list) => list.map((item)=> this.fromServerModel(item))),
        catchError(handleError<T[]>('getList'))
      );
  }

  get(id: string | number): Observable<T> {
    return this.httpClient.get<T>(`/${this.APIUrl}}/${id}`)
      .pipe(
        map((json) => this.fromServerModel(json)),
        catchError(handleError<T>('get'))
      );
  }

  create(resource: T): Observable<any> {
    return this.httpClient.post(`/${this.APIUrl}}`, this.toServerModel(resource))
      .pipe(
        catchError(handleError<T>('create'))
      );
  }

  delete(id: string | number): Observable<any> {
    return this.httpClient.delete(`/${this.APIUrl}}/${id}`) 
      .pipe(
        catchError(handleError<T>('delete'))
      );
  }

  update(resource: T) {
    return this.httpClient.put(`/${this.APIUrl}}`,this.toServerModel(resource))
      .pipe(
        catchError(handleError<T>('update'))
      );
  }
}
