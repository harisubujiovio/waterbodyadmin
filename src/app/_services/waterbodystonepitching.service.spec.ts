import { TestBed } from '@angular/core/testing';

import { WaterbodystonepitchingService } from './waterbodystonepitching.service';

describe('WaterbodystonepitchingService', () => {
  let service: WaterbodystonepitchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodystonepitchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
