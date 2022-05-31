import { TestBed } from '@angular/core/testing';

import { WaterbodyshutterconditionService } from './waterbodyshuttercondition.service';

describe('WaterbodyshutterconditionService', () => {
  let service: WaterbodyshutterconditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyshutterconditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
