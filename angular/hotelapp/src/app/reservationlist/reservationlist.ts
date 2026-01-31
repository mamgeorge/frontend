import { Component, OnInit } from '@angular/core';
import { Reservationservice } from '../reservationmod/reservationservice';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservationlist',
  standalone: false,
  templateUrl: './reservationlist.html',
  styleUrl: './reservationlist.css',
})
export class Reservationlist implements OnInit {

  reservations: Reservation[] = [];

  constructor(private reservationService: Reservationservice) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe(reservations => {
      this.reservations = reservations;
    });
  }

  delReservation(id: string): void {

    this.reservationService.deleteReservation(id).subscribe(() => {
      console.log('Reservation deleted: ' + id);
    });
  }
}
