import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomListSecondComponent } from './room-list-second.component';

describe('RoomListSecondComponent', () => {
  let component: RoomListSecondComponent;
  let fixture: ComponentFixture<RoomListSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomListSecondComponent]
    });
    fixture = TestBed.createComponent(RoomListSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
