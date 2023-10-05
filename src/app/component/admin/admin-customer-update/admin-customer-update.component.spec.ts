import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerUpdateComponent } from './admin-customer-update.component';

describe('AdminCustomerUpdateComponent', () => {
  let component: AdminCustomerUpdateComponent;
  let fixture: ComponentFixture<AdminCustomerUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCustomerUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminCustomerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
