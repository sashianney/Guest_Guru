import { TestBed } from '@angular/core/testing';

import { CustomerHardCodedAuthenticationService } from './customer-hard-coded-authentication.service';

describe('CustomerHardCodedAuthenticationService', () => {
  let service: CustomerHardCodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerHardCodedAuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
