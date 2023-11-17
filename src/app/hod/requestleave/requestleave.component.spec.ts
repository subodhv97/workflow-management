import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestleaveComponent } from './requestleave.component';

describe('RequestleaveComponent', () => {
  let component: RequestleaveComponent;
  let fixture: ComponentFixture<RequestleaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestleaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
