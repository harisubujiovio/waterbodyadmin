import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Panchayat } from '../_model/Panchayat';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class PanchayatService extends ResourceService<Panchayat> {

  constructor(protected override httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/panchayats/';
  }
}
