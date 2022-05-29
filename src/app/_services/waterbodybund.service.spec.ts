import { TestBed } from '@angular/core/testing';

import { WaterbodybundService } from './waterbodybund.service';

describe('WaterbodybundService', () => {
  let service: WaterbodybundService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodybundService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
