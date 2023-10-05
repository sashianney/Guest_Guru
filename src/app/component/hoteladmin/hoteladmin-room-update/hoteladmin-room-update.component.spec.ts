import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminRoomUpdateComponent } from './hoteladmin-room-update.component';

describe('HoteladminRoomUpdateComponent', () => {
  let component: HoteladminRoomUpdateComponent;
  let fixture: ComponentFixture<HoteladminRoomUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminRoomUpdateComponent]
    });
    fixture = TestBed.createComponent(HoteladminRoomUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
