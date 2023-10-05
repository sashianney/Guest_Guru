import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminUpdateComponent } from './hoteladmin-update.component';

describe('HoteladminUpdateComponent', () => {
  let component: HoteladminUpdateComponent;
  let fixture: ComponentFixture<HoteladminUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminUpdateComponent]
    });
    fixture = TestBed.createComponent(HoteladminUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
