import { TestBed } from '@angular/core/testing';

import { WaterBodySpreadIssuesService } from './waterbodyspreadissues.service';

describe('WaterBodySpreadIssuesService', () => {
  let service: WaterBodySpreadIssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterBodySpreadIssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
