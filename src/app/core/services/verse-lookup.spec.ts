import { TestBed } from '@angular/core/testing';

import { VerseLookup } from './verse-lookup';

describe('VerseLookup', () => {
  let service: VerseLookup;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerseLookup);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
