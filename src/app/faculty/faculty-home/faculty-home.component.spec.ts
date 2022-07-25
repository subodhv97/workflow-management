import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyHomeComponent } from './faculty-home.component';

describe('FacultyHomeComponent', () => {
  let component: FacultyHomeComponent;
  let fixture: ComponentFixture<FacultyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
