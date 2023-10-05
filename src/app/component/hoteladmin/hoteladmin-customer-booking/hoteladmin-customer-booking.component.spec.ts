import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminCustomerBookingComponent } from './hoteladmin-customer-booking.component';

describe('HoteladminCustomerBookingComponent', () => {
  let component: HoteladminCustomerBookingComponent;
  let fixture: ComponentFixture<HoteladminCustomerBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminCustomerBookingComponent]
    });
    fixture = TestBed.createComponent(HoteladminCustomerBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
