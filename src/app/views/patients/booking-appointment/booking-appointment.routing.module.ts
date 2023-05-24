import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingAppointmentComponent } from './booking-appointment.component';

const routes: Routes = [
  {
    path: '',
    component: BookingAppointmentComponent,
    data: {
      title: 'Booking Appointment'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingAppointmentRoutingModule { }
