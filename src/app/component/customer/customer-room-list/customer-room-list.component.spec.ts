import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRoomListComponent } from './customer-room-list.component';

describe('CustomerRoomListComponent', () => {
  let component: CustomerRoomListComponent;
  let fixture: ComponentFixture<CustomerRoomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerRoomListComponent]
    });
    fixture = TestBed.createComponent(CustomerRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
