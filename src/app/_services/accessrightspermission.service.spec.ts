import { TestBed } from '@angular/core/testing';

import { AccessrightspermissionService } from './accessrightspermission.service';

describe('AccessrightspermissionService', () => {
  let service: AccessrightspermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessrightspermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
