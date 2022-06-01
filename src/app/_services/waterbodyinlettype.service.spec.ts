import { TestBed } from '@angular/core/testing';

import { WaterbodyinlettypeService } from './waterbodyinlettype.service';

describe('WaterbodyinlettypeService', () => {
  let service: WaterbodyinlettypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyinlettypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
