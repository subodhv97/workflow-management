import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpapprovelComponent } from './qpapprovel.component';

describe('QpapprovelComponent', () => {
  let component: QpapprovelComponent;
  let fixture: ComponentFixture<QpapprovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QpapprovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QpapprovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
