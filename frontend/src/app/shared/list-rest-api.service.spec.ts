import { TestBed } from '@angular/core/testing';

import { ListRestApiService } from './list-rest-api.service';

describe('ListRestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListRestApiService = TestBed.get(ListRestApiService);
    expect(service).toBeTruthy();
  });
});
