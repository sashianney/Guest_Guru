import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListyourpropertyComponent } from './listyourproperty.component';

describe('ListyourpropertyComponent', () => {
  let component: ListyourpropertyComponent;
  let fixture: ComponentFixture<ListyourpropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListyourpropertyComponent]
    });
    fixture = TestBed.createComponent(ListyourpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
