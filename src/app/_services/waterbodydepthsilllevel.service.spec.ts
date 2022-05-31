import { TestBed } from '@angular/core/testing';

import { WaterbodydepthsilllevelService } from './waterbodydepthsilllevel.service';

describe('WaterbodydepthsilllevelService', () => {
  let service: WaterbodydepthsilllevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodydepthsilllevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
