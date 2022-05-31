import { TestBed } from '@angular/core/testing';

import { WaterbodyayacutnoncultivationService } from './waterbodyayacutnoncultivation.service';

describe('WaterbodyayacutnoncultivationService', () => {
  let service: WaterbodyayacutnoncultivationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyayacutnoncultivationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
