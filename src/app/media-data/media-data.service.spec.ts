import { TestBed } from '@angular/core/testing';

import { MediaDataService } from './media-data.service';

describe('MediaDataService', () => {
  let service: MediaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
