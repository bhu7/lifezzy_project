import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-booking-appointment',
  templateUrl: './booking-appointment.component.html',
  styleUrls: ['./booking-appointment.component.css']
})
export class BookingAppointmentComponent implements OnInit {

  constructor(private route: ActivatedRoute,) {}

  ngOnInit() {
    // alert('booking Rendered')

  }

}
