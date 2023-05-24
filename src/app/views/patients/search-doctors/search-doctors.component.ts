import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-doctors',
  templateUrl: './search-doctors.component.html',
  styleUrls: ['./search-doctors.component.css']
})
export class SearchDoctorsComponent implements OnInit {

  constructor(private route: ActivatedRoute,) {}

  ngOnInit() {
    // alert('search-doctors Rendered')

  }

}
