import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource } from '../_model/Resource';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class WaterbodysluiceService extends ResourceService<Resource> {

  constructor(protected override httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/waterbodysluices';
  }
}
