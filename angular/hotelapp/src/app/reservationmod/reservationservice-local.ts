import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root',
})
export class Reservationservice {

  private reservations: Reservation[] = [];

  constructor() { // happens before ng lifecycle hook

    let savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations? JSON.parse(savedReservations) : [];
  }

  // CRUD
  addReservation(reservation: Reservation): void {

    reservation.id = Date.now().toString(); // crypto.randomUUID
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
    console.log('CREATED: ' + this.reservations);
  }

  getReservations(): Reservation[] {

    console.log('READ: ' + this.reservations);
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {

    let reservation = this.reservations.find(res => res.id === id) ;
    console.log('READ: ' + reservation);
    return reservation;
  }

  updateReservation(id: string, updatedReservation: Reservation): void {

    let index = this.reservations.findIndex(res => res.id === id);

    if (index >= 0 && index < this.reservations.length) {
      this.reservations[index] = updatedReservation;
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    } else {
      throw new Error('UPDATE FAILED: Reservation not found');
    }
    console.log('UPDATED: ' + updatedReservation);
  }

  deleteReservation(id: string): void {

    let index = this.reservations.findIndex(res => res.id === id);
    if (index >= 0 && index < this.reservations.length) {
      this.reservations.splice(index, 1);
      localStorage.setItem('reservations', JSON.stringify(this.reservations));
    } else {
      throw new Error('DELETE FAILED: Reservation not found');
    }
    console.log('DELETED: ' + id);
  }
}
