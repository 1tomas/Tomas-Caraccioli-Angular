import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrumaAboutComponent } from './bruma-about.component';

describe('BrumaAboutComponent', () => {
  let component: BrumaAboutComponent;
  let fixture: ComponentFixture<BrumaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrumaAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrumaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
