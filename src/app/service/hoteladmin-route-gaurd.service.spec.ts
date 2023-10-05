import { TestBed } from '@angular/core/testing';

import { HoteladminRouteGaurdService } from './hoteladmin-route-gaurd.service';

describe('HoteladminRouteGaurdService', () => {
  let service: HoteladminRouteGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoteladminRouteGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
