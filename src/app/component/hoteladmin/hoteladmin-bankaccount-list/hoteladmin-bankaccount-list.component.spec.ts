import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminBankaccountListComponent } from './hoteladmin-bankaccount-list.component';

describe('HoteladminBankaccountListComponent', () => {
  let component: HoteladminBankaccountListComponent;
  let fixture: ComponentFixture<HoteladminBankaccountListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminBankaccountListComponent]
    });
    fixture = TestBed.createComponent(HoteladminBankaccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
