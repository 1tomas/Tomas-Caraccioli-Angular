import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueIntegerComponent } from './value-integer.component';

describe('ValueIntegerComponent', () => {
  let component: ValueIntegerComponent;
  let fixture: ComponentFixture<ValueIntegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueIntegerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueIntegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
