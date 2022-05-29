import { TestBed } from '@angular/core/testing';

import { WaterbodytypeService } from './waterbodytype.service';

describe('WaterbodytypeService', () => {
  let service: WaterbodytypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodytypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
