import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-default-layout',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  

    constructor(private activatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
      // alert('DEFAULT LAYOUT')
    }
}