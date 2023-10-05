import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminRoomListComponent } from './hoteladmin-room-list.component';

describe('HoteladminRoomListComponent', () => {
  let component: HoteladminRoomListComponent;
  let fixture: ComponentFixture<HoteladminRoomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminRoomListComponent]
    });
    fixture = TestBed.createComponent(HoteladminRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
