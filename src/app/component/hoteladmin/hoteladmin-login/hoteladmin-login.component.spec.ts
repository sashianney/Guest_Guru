import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminLoginComponent } from './hoteladmin-login.component';

describe('HoteladminLoginComponent', () => {
  let component: HoteladminLoginComponent;
  let fixture: ComponentFixture<HoteladminLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminLoginComponent]
    });
    fixture = TestBed.createComponent(HoteladminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
