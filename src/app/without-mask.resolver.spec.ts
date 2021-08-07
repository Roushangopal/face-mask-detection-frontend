import { TestBed } from '@angular/core/testing';

import { WithoutMaskResolver } from './without-mask.resolver';

describe('WithoutMaskResolver', () => {
  let resolver: WithoutMaskResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(WithoutMaskResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
