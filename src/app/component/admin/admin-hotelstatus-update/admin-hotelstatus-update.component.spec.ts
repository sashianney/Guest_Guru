import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHotelstatusUpdateComponent } from './admin-hotelstatus-update.component';

describe('AdminHotelstatusUpdateComponent', () => {
  let component: AdminHotelstatusUpdateComponent;
  let fixture: ComponentFixture<AdminHotelstatusUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHotelstatusUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminHotelstatusUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
