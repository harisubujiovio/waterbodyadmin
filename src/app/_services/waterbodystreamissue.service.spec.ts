import { TestBed } from '@angular/core/testing';

import { WaterbodystreamissueService } from './waterbodystreamissue.service';

describe('WaterbodystreamissueService', () => {
  let service: WaterbodystreamissueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodystreamissueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
