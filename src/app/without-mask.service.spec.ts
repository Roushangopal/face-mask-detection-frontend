import { TestBed } from '@angular/core/testing';

import { WithoutMaskService } from './without-mask.service';

describe('WithoutMaskService', () => {
  let service: WithoutMaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithoutMaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
