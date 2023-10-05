import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminRoomcategoryAddComponent } from './hoteladmin-roomcategory-add.component';

describe('HoteladminRoomcategoryAddComponent', () => {
  let component: HoteladminRoomcategoryAddComponent;
  let fixture: ComponentFixture<HoteladminRoomcategoryAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminRoomcategoryAddComponent]
    });
    fixture = TestBed.createComponent(HoteladminRoomcategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
