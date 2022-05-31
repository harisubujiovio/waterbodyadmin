import { TestBed } from '@angular/core/testing';

import { WaterbodysurplusweirService } from './waterbodysurplusweir.service';

describe('WaterbodysurplusweirService', () => {
  let service: WaterbodysurplusweirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodysurplusweirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
