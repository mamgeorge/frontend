import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cartview } from './cartview';

describe('Cartview', () => {
  let component: Cartview;
  let fixture: ComponentFixture<Cartview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cartview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cartview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
