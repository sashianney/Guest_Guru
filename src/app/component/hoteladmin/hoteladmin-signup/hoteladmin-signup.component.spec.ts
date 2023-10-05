import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminSignupComponent } from './hoteladmin-signup.component';

describe('HoteladminSignupComponent', () => {
  let component: HoteladminSignupComponent;
  let fixture: ComponentFixture<HoteladminSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminSignupComponent]
    });
    fixture = TestBed.createComponent(HoteladminSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
