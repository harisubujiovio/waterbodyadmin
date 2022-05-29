import { TestBed } from '@angular/core/testing';

import { WaterbodysourceService } from './waterbodysource.service';

describe('WaterbodysourceService', () => {
  let service: WaterbodysourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodysourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
