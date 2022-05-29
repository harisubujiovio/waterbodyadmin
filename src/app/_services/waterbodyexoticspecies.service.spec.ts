import { TestBed } from '@angular/core/testing';

import { WaterbodyexoticspeciesService } from './waterbodyexoticspecies.service';

describe('WaterbodyexoticspeciesService', () => {
  let service: WaterbodyexoticspeciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyexoticspeciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
