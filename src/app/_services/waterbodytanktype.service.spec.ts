import { TestBed } from '@angular/core/testing';

import { WaterbodytanktypeService } from './waterbodytanktype.service';

describe('WaterbodytanktypeService', () => {
  let service: WaterbodytanktypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodytanktypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
