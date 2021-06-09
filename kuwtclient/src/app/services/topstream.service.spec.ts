import { TestBed } from '@angular/core/testing';

import { TopstreamService } from './topstream.service';

describe('TopstreamService', () => {
  let service: TopstreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopstreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
