import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingAppointmentComponent } from './booking-appointment.component';
import { BookingAppointmentRoutingModule } from './booking-appointment.routing.module';

@NgModule({
  declarations: [BookingAppointmentComponent],
  imports: [ BookingAppointmentRoutingModule],
})
export class BookingAppointmentModule {
}
