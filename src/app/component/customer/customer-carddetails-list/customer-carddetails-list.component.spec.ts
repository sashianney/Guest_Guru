import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCarddetailsListComponent } from './customer-carddetails-list.component';

describe('CustomerCarddetailsListComponent', () => {
  let component: CustomerCarddetailsListComponent;
  let fixture: ComponentFixture<CustomerCarddetailsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCarddetailsListComponent]
    });
    fixture = TestBed.createComponent(CustomerCarddetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
