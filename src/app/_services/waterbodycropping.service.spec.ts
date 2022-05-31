import { TestBed } from '@angular/core/testing';

import { WaterbodycroppingService } from './waterbodycropping.service';

describe('WaterbodycroppingService', () => {
  let service: WaterbodycroppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodycroppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
