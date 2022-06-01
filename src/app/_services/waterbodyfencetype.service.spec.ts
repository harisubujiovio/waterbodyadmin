import { TestBed } from '@angular/core/testing';

import { WaterbodyfencetypeService } from './waterbodyfencetype.service';

describe('WaterbodyfencetypeService', () => {
  let service: WaterbodyfencetypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyfencetypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
