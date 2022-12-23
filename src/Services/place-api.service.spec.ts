import { TestBed } from '@angular/core/testing';

import { PlaceApiService } from './place-api.service';

describe('PlaceApiService', () => {
  let service: PlaceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
