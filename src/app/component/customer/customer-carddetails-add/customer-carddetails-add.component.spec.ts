import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCarddetailsAddComponent } from './customer-carddetails-add.component';

describe('CustomerCarddetailsAddComponent', () => {
  let component: CustomerCarddetailsAddComponent;
  let fixture: ComponentFixture<CustomerCarddetailsAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerCarddetailsAddComponent]
    });
    fixture = TestBed.createComponent(CustomerCarddetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
