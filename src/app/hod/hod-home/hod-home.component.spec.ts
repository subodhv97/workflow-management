import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodHomeComponent } from './hod-home.component';

describe('HodHomeComponent', () => {
  let component: HodHomeComponent;
  let fixture: ComponentFixture<HodHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HodHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
