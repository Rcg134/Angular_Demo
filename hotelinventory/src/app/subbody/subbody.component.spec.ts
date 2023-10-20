import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbodyComponent } from './subbody.component';

describe('SubbodyComponent', () => {
  let component: SubbodyComponent;
  let fixture: ComponentFixture<SubbodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubbodyComponent]
    });
    fixture = TestBed.createComponent(SubbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
