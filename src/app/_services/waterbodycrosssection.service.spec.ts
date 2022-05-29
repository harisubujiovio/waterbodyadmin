import { TestBed } from '@angular/core/testing';

import { WaterbodycrosssectionService } from './waterbodycrosssection.service';

describe('WaterbodycrosssectionService', () => {
  let service: WaterbodycrosssectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodycrosssectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
