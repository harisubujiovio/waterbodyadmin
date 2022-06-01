import { TestBed } from '@angular/core/testing';

import { WaterbodytempletanktypeService } from './waterbodytempletanktype.service';

describe('WaterbodytempletanktypeService', () => {
  let service: WaterbodytempletanktypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodytempletanktypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
