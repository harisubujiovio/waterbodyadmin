import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { District } from '../_model/District';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class DistrictService extends ResourceService<District> {

  constructor(protected override httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/districts';
  }
}
