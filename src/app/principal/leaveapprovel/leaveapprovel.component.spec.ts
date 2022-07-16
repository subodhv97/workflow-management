import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveapprovelComponent } from './leaveapprovel.component';

describe('LeaveapprovelComponent', () => {
  let component: LeaveapprovelComponent;
  let fixture: ComponentFixture<LeaveapprovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveapprovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveapprovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
