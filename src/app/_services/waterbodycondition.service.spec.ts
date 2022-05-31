import { TestBed } from '@angular/core/testing';

import { WaterbodyconditionService } from './waterbodycondition.service';

describe('WaterbodyconditionService', () => {
  let service: WaterbodyconditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyconditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
