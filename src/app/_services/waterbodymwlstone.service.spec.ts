import { TestBed } from '@angular/core/testing';

import { WaterbodymwlstoneService } from './waterbodymwlstone.service';

describe('WaterbodymwlstoneService', () => {
  let service: WaterbodymwlstoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodymwlstoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
