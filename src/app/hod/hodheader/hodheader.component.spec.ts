import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodheaderComponent } from './hodheader.component';

describe('HodheaderComponent', () => {
  let component: HodheaderComponent;
  let fixture: ComponentFixture<HodheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
