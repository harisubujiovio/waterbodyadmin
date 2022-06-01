import { TestBed } from '@angular/core/testing';

import { WaterbodytankuniquenessService } from './waterbodytankuniqueness.service';

describe('WaterbodytankuniquenessService', () => {
  let service: WaterbodytankuniquenessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodytankuniquenessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
