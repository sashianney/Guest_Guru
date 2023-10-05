import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminLogoutComponent } from './hoteladmin-logout.component';

describe('HoteladminLogoutComponent', () => {
  let component: HoteladminLogoutComponent;
  let fixture: ComponentFixture<HoteladminLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminLogoutComponent]
    });
    fixture = TestBed.createComponent(HoteladminLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
