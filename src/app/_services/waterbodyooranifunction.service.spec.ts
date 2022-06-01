import { TestBed } from '@angular/core/testing';

import { WaterbodyooranifunctionService } from './waterbodyooranifunction.service';

describe('WaterbodyooranifunctionService', () => {
  let service: WaterbodyooranifunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyooranifunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
