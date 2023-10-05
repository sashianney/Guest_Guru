import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminHotelListComponent } from './hoteladmin-hotel-list.component';

describe('HoteladminHotelListComponent', () => {
  let component: HoteladminHotelListComponent;
  let fixture: ComponentFixture<HoteladminHotelListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminHotelListComponent]
    });
    fixture = TestBed.createComponent(HoteladminHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
