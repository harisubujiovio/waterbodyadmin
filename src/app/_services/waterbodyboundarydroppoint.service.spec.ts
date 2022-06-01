import { TestBed } from '@angular/core/testing';

import { WaterbodyboundarydroppointService } from './waterbodyboundarydroppoint.service';

describe('WaterbodyboundarydroppointService', () => {
  let service: WaterbodyboundarydroppointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyboundarydroppointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
