import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodsidebarComponent } from './hodsidebar.component';

describe('HodsidebarComponent', () => {
  let component: HodsidebarComponent;
  let fixture: ComponentFixture<HodsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
