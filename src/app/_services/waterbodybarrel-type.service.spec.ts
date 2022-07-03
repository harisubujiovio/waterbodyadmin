import { TestBed } from '@angular/core/testing';

import { WaterbodybarrelTypeService } from './waterbodybarrel-type.service';

describe('WaterbodybarrelTypeService', () => {
  let service: WaterbodybarrelTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodybarrelTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
