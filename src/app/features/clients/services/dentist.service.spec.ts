import { TestBed } from '@angular/core/testing';

import { DentistService } from './client.service';

describe('DentistService', () => {
  let service: DentistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DentistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
