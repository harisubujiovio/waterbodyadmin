import { TestBed } from '@angular/core/testing';

import { WaterbodyfenceconditionService } from './waterbodyfencecondition.service';

describe('WaterbodyfenceconditionService', () => {
  let service: WaterbodyfenceconditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyfenceconditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
