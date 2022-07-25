import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodaddfacultyComponent } from './hodaddfaculty.component';

describe('HodaddfacultyComponent', () => {
  let component: HodaddfacultyComponent;
  let fixture: ComponentFixture<HodaddfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodaddfacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodaddfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
