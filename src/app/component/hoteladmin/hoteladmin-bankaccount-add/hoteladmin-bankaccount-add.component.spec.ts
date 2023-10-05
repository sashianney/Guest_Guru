import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminBankaccountAddComponent } from './hoteladmin-bankaccount-add.component';

describe('HoteladminBankaccountAddComponent', () => {
  let component: HoteladminBankaccountAddComponent;
  let fixture: ComponentFixture<HoteladminBankaccountAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminBankaccountAddComponent]
    });
    fixture = TestBed.createComponent(HoteladminBankaccountAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
