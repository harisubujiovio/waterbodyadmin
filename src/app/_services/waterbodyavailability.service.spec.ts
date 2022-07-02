import { TestBed } from '@angular/core/testing';

import { WaterbodyavailabilityService } from './waterbodyavailability.service';

describe('WaterbodyavailabilityService', () => {
  let service: WaterbodyavailabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyavailabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
