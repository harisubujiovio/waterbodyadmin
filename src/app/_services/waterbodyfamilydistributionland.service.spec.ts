import { TestBed } from '@angular/core/testing';

import { WaterbodyfamilydistributionlandService } from './waterbodyfamilydistributionland.service';

describe('WaterbodyfamilydistributionlandService', () => {
  let service: WaterbodyfamilydistributionlandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyfamilydistributionlandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
