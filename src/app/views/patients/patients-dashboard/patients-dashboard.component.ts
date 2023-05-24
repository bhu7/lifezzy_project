import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-patients-dashboard',
  templateUrl: './patients-dashboard.component.html',
  styleUrls: ['./patients-dashboard.component.css']
})
export class PatientsDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute,) {}

  ngOnInit() {
    // alert('patients-dashboard Rendered')

  }

}
