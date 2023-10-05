import { TestBed } from '@angular/core/testing';

import { AdminRouteGaurdService } from './admin-route-gaurd.service';

describe('AdminRouteGaurdService', () => {
  let service: AdminRouteGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminRouteGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
