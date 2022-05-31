import { TestBed } from '@angular/core/testing';

import { WaterbodysluiceService } from './waterbodysluice.service';

describe('WaterbodysluiceService', () => {
  let service: WaterbodysluiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodysluiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
