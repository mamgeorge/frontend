import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Reservationform } from '../reservationform/reservationform';
import { Reservationlist } from '../reservationlist/reservationlist';
import { RouterModule } from '@angular/router';
import { HomemodModule } from '../homemod/homemod-module';

@NgModule({
  declarations: [
    Reservationform,
    Reservationlist
  ],
  imports: [
    CommonModule,
    FormsModule,        // validated in html
    ReactiveFormsModule, // validated in ts
    RouterModule,
    HomemodModule
  ]
})
export class ReservationmodModule { }
