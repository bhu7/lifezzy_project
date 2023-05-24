import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-general-layout',
    templateUrl: './general-layout.component.html',
    styleUrls: ['./general-layout.component.scss']
})
export class GeneralLayoutComponent implements OnInit {
    breadcrumbs: any = null;
    showSideBar: boolean = false;
    useSession: any;
    sub: any;
    siteName: any;
    constructor(private activatedRoute: ActivatedRoute) {
    }
    ngOnInit() {
        // alert('General LAYOUT')

    }
}