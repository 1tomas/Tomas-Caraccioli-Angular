import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrumaProductsComponent } from './bruma-products.component';

describe('BrumaProductsComponent', () => {
  let component: BrumaProductsComponent;
  let fixture: ComponentFixture<BrumaProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrumaProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrumaProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
