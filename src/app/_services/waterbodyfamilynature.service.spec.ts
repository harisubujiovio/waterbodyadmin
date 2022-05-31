import { TestBed } from '@angular/core/testing';

import { WaterbodyfamilynatureService } from './waterbodyfamilynature.service';

describe('WaterbodyfamilynatureService', () => {
  let service: WaterbodyfamilynatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyfamilynatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
