import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingnotificationComponent } from './meetingnotification.component';

describe('MeetingnotificationComponent', () => {
  let component: MeetingnotificationComponent;
  let fixture: ComponentFixture<MeetingnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
