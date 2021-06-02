import { TestBed } from '@angular/core/testing';

import { StreamerserviceService } from './streamerservice.service';

describe('StreamerserviceService', () => {
  let service: StreamerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
