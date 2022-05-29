import { TestBed } from '@angular/core/testing';

import { WaterbodytankissueService } from './waterbodytankissue.service';

describe('WaterbodytankissueService', () => {
  let service: WaterbodytankissueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodytankissueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
