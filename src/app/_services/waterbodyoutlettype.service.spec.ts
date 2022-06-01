import { TestBed } from '@angular/core/testing';

import { WaterbodyoutlettypeService } from './waterbodyoutlettype.service';

describe('WaterbodyoutlettypeService', () => {
  let service: WaterbodyoutlettypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyoutlettypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
