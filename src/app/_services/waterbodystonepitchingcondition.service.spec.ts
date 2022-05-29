import { TestBed } from '@angular/core/testing';

import { WaterbodystonepitchingconditionService } from './waterbodystonepitchingcondition.service';

describe('WaterbodystonepitchingconditionService', () => {
  let service: WaterbodystonepitchingconditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodystonepitchingconditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
