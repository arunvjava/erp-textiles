import { TestBed } from '@angular/core/testing';

import { HsnService } from './hsn.service';

describe('HsnService', () => {
  let service: HsnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HsnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
