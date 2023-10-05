import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminDashboardComponent } from './hoteladmin-dashboard.component';

describe('HoteladminDashboardComponent', () => {
  let component: HoteladminDashboardComponent;
  let fixture: ComponentFixture<HoteladminDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminDashboardComponent]
    });
    fixture = TestBed.createComponent(HoteladminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
