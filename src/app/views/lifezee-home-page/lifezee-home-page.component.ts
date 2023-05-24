import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lifezee-home-page',
  templateUrl: './lifezee-home-page.component.html',
  styleUrls: ['./lifezee-home-page.component.css']
})
export class LifezeeHomePageComponent implements OnInit {

  constructor(private route: ActivatedRoute,) {}

  ngOnInit() {

  }

}
