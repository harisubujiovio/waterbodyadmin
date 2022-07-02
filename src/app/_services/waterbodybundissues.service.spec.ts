import { TestBed } from '@angular/core/testing';

import { WaterbodybundissuesService } from './waterbodybundissues.service';

describe('WaterbodybundissuesService', () => {
  let service: WaterbodybundissuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodybundissuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
