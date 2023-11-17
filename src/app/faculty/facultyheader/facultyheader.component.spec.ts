import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyheaderComponent } from './facultyheader.component';

describe('FacultyheaderComponent', () => {
  let component: FacultyheaderComponent;
  let fixture: ComponentFixture<FacultyheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
