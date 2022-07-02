import { TestBed } from '@angular/core/testing';

import { WaterbodycatchmenttypeService } from './waterbodycatchmenttype.service';

describe('WaterbodycatchmenttypeService', () => {
  let service: WaterbodycatchmenttypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodycatchmenttypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
