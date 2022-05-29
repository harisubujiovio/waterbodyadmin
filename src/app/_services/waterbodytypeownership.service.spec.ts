import { TestBed } from '@angular/core/testing';

import { WaterbodytypeownershipService } from './waterbodytypeownership.service';

describe('WaterbodytypeownershipService', () => {
  let service: WaterbodytypeownershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodytypeownershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
