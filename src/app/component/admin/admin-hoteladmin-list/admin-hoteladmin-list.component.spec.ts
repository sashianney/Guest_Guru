import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHoteladminListComponent } from './admin-hoteladmin-list.component';

describe('AdminHoteladminListComponent', () => {
  let component: AdminHoteladminListComponent;
  let fixture: ComponentFixture<AdminHoteladminListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHoteladminListComponent]
    });
    fixture = TestBed.createComponent(AdminHoteladminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
