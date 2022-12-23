import { TestBed } from '@angular/core/testing';

import { TempUnitApiService } from './temp-unit-api.service';

describe('TempUnitApiService', () => {
  let service: TempUnitApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempUnitApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
