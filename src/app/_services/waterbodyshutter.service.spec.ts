import { TestBed } from '@angular/core/testing';

import { WaterbodyshutterService } from './waterbodyshutter.service';

describe('WaterbodyshutterService', () => {
  let service: WaterbodyshutterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyshutterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
