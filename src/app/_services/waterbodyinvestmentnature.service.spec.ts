import { TestBed } from '@angular/core/testing';

import { WaterbodyinvestmentnatureService } from './waterbodyinvestmentnature.service';

describe('WaterbodyinvestmentnatureService', () => {
  let service: WaterbodyinvestmentnatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyinvestmentnatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
