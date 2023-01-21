import { TestBed } from '@angular/core/testing';

import { BulidService } from './bulid.service';

describe('BulidService', () => {
  let service: BulidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
