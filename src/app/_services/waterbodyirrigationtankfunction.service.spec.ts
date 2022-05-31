import { TestBed } from '@angular/core/testing';

import { WaterbodyirrigationtankfunctionService } from './waterbodyirrigationtankfunction.service';

describe('WaterbodyirrigationtankfunctionService', () => {
  let service: WaterbodyirrigationtankfunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyirrigationtankfunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
