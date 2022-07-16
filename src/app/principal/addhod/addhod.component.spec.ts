import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhodComponent } from './addhod.component';

describe('AddhodComponent', () => {
  let component: AddhodComponent;
  let fixture: ComponentFixture<AddhodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddhodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
