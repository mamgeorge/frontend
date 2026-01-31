import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reservationlist } from './reservationlist';

describe('Reservationlist', () => {
  let component: Reservationlist;
  let fixture: ComponentFixture<Reservationlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reservationlist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reservationlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
