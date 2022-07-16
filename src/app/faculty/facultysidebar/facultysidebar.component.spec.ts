import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultysidebarComponent } from './facultysidebar.component';

describe('FacultysidebarComponent', () => {
  let component: FacultysidebarComponent;
  let fixture: ComponentFixture<FacultysidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultysidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultysidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
