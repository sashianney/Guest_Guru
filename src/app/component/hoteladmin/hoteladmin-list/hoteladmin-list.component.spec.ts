import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminListComponent } from './hoteladmin-list.component';

describe('HoteladminListComponent', () => {
  let component: HoteladminListComponent;
  let fixture: ComponentFixture<HoteladminListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminListComponent]
    });
    fixture = TestBed.createComponent(HoteladminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
