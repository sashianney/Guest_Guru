import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHoteldetailsListComponent } from './admin-hoteldetails-list.component';

describe('AdminHoteldetailsListComponent', () => {
  let component: AdminHoteldetailsListComponent;
  let fixture: ComponentFixture<AdminHoteldetailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHoteldetailsListComponent]
    });
    fixture = TestBed.createComponent(AdminHoteldetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
