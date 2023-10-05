import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminRoomAddComponent } from './hoteladmin-room-add.component';

describe('HoteladminRoomAddComponent', () => {
  let component: HoteladminRoomAddComponent;
  let fixture: ComponentFixture<HoteladminRoomAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminRoomAddComponent]
    });
    fixture = TestBed.createComponent(HoteladminRoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
