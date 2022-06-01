import { TestBed } from '@angular/core/testing';

import { WaterbodyslittrapService } from './waterbodyslittrap.service';

describe('WaterbodyslittrapService', () => {
  let service: WaterbodyslittrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyslittrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
