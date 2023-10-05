import { TestBed } from '@angular/core/testing';

import { HoteladminHardCodedAuthenticationService } from './hoteladmin-hard-coded-authentication.service';

describe('HoteladminHardCodedAuthenticationService', () => {
  let service: HoteladminHardCodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoteladminHardCodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
