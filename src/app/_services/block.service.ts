import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Block } from '../_model/Block';
import { Resource } from '../_model/Resource';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root'
})
export class BlockService extends ResourceService<Block> {

  constructor(protected override httpClient: HttpClient ) { 
    super(httpClient);
  }

  getResourceUrl(): string {
    return '/waterBodyAdmin/blocks';
  }
}
