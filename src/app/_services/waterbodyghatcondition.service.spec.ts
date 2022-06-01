import { TestBed } from '@angular/core/testing';

import { WaterbodyghatconditionService } from './waterbodyghatcondition.service';

describe('WaterbodyghatconditionService', () => {
  let service: WaterbodyghatconditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyghatconditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
