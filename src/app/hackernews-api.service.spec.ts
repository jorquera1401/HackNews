import { TestBed } from '@angular/core/testing';

import { HackernewsApiService } from './hackernews-api.service';

describe('HackernewsApiService', () => {
  let service: HackernewsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackernewsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
