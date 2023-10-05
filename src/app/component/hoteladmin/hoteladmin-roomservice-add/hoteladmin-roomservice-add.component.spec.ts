import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteladminRoomserviceAddComponent } from './hoteladmin-roomservice-add.component';

describe('HoteladminRoomserviceAddComponent', () => {
  let component: HoteladminRoomserviceAddComponent;
  let fixture: ComponentFixture<HoteladminRoomserviceAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteladminRoomserviceAddComponent]
    });
    fixture = TestBed.createComponent(HoteladminRoomserviceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
