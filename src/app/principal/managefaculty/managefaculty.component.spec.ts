import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefacultyComponent } from './managefaculty.component';

describe('ManagefacultyComponent', () => {
  let component: ManagefacultyComponent;
  let fixture: ComponentFixture<ManagefacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagefacultyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagefacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
