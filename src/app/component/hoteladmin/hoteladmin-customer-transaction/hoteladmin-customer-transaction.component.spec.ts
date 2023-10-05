import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminCustomerTransactionComponent } from './hoteladmin-customer-transaction.component';

describe('HoteladminCustomerTransactionComponent', () => {
  let component: HoteladminCustomerTransactionComponent;
  let fixture: ComponentFixture<HoteladminCustomerTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminCustomerTransactionComponent]
    });
    fixture = TestBed.createComponent(HoteladminCustomerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
