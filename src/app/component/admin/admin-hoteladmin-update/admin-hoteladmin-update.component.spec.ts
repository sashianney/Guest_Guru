import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHoteladminUpdateComponent } from './admin-hoteladmin-update.component';

describe('AdminHoteladminUpdateComponent', () => {
  let component: AdminHoteladminUpdateComponent;
  let fixture: ComponentFixture<AdminHoteladminUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHoteladminUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminHoteladminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
