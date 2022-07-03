import { TestBed } from '@angular/core/testing';

import { WaterBodyfieldchanneltypeService } from './waterbodyfieldchanneltype.service';

describe('WaterBodyfieldchanneltypeService', () => {
  let service: WaterBodyfieldchanneltypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterBodyfieldchanneltypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
