import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminHotelAddComponent } from './hoteladmin-hotel-add.component';

describe('HoteladminHotelAddComponent', () => {
  let component: HoteladminHotelAddComponent;
  let fixture: ComponentFixture<HoteladminHotelAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminHotelAddComponent]
    });
    fixture = TestBed.createComponent(HoteladminHotelAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
