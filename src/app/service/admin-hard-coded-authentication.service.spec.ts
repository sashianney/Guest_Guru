import { TestBed } from '@angular/core/testing';

import { AdminHardCodedAuthenticationService } from './admin-hard-coded-authentication.service';

describe('AdminHardCodedAuthenticationService', () => {
  let service: AdminHardCodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminHardCodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
