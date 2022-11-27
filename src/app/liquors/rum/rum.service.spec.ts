import { TestBed } from '@angular/core/testing';

import { RumService } from './rum.service';

describe('RumService', () => {
  let service: RumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
