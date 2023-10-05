import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminHotelUpdateComponent } from './hoteladmin-hotel-update.component';

describe('HoteladminHotelUpdateComponent', () => {
  let component: HoteladminHotelUpdateComponent;
  let fixture: ComponentFixture<HoteladminHotelUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminHotelUpdateComponent]
    });
    fixture = TestBed.createComponent(HoteladminHotelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
