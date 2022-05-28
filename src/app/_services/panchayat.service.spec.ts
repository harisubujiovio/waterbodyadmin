import { TestBed } from '@angular/core/testing';

import { PanchayatService } from './panchayat.service';

describe('PanchayatService', () => {
  let service: PanchayatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanchayatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
