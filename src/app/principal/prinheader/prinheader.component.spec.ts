import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinheaderComponent } from './prinheader.component';

describe('PrinheaderComponent', () => {
  let component: PrinheaderComponent;
  let fixture: ComponentFixture<PrinheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrinheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
