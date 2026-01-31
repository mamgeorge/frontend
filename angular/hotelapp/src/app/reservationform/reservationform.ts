import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservationservice } from '../reservationmod/reservationservice';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservationform',
  standalone: false,
  templateUrl: './reservationform.html',
  styleUrl: './reservationform.css',
})
export class Reservationform implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private reservationService: Reservationservice,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.reservationForm = this.formBuilder.group({
      checkInDate: ['2026-02-01', Validators.required],
      checkOutDate: ['2026-02-01', Validators.required],
      guestName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      guestEmail: ['anyone@test.com', [Validators.required, Validators.email]],
      roomNumber: ['', [Validators.required, Validators.min(100)]]
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservation(id).subscribe(reservation => {;
      if (reservation) {
        this.reservationForm.patchValue(reservation);
      }
    });
    }
  }

  onSubmit(): void {

    if (this.reservationForm.valid) {

      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        // Update
        this.reservationService.updateReservation(id, reservation).subscribe(() => {
          console.log('UPDATING: ' + id);
        });
      } else {
        // Create
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log('CREATING:');
        })
      }

      this.router.navigate(['/list']);
      console.log('Submitted: ', reservation);
    }
  }
}
