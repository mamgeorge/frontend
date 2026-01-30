import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList implements OnInit {

  // appointment: string = 'Any Appointment!' // property of class, not variable of method
  // appointment: Appointment = { id: 1, title: 'Doctor Visit', date: new Date() };
  newApptTitle: string = ''
  newApptDate: string = new Date().toISOString().substring(0, 10)
  appointments: Appointment[] = []

  ngOnInit(): void {

    let savedAppointments = localStorage.getItem('appointments')
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
    console.log(this.appointments.length + ' appointment(s) loaded!')
  }

  addAppointment(): void {

    // alert(this.newApptTitle + ' ' + this.newApptDate.toDateString());
    if (this.newApptTitle.trim().length && this.newApptDate) {

      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newApptTitle,
        date: this.newApptDate
      }

      this.appointments.push(newAppointment);
      localStorage.setItem('appointments', JSON.stringify(this.appointments));

      this.newApptTitle = ''
      this.newApptDate = new Date().toISOString().substring(0, 10)

      console.log(this.appointments.length + ' appointment(s) total!')
    }
  }

  delAppointment(index: number): void {

    this.appointments.splice(index, 1)
    localStorage.setItem('appointments', JSON.stringify(this.appointments))

    // this.appointments = this.appointments.filter(appt => appt.id !== index)
    console.log(this.appointments.length + ' appointment(s) remaining!')
  }
}
