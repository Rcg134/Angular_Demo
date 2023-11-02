import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenDialogComponent } from './gen-dialog.component';

describe('GenDialogComponent', () => {
  let component: GenDialogComponent;
  let fixture: ComponentFixture<GenDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenDialogComponent]
    });
    fixture = TestBed.createComponent(GenDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
