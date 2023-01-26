import { TestBed } from '@angular/core/testing';

import { Rt360Service } from './rt360.service';

describe('Rt360Service', () => {
  let service: Rt360Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rt360Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
