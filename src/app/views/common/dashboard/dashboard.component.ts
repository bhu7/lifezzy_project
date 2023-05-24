import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, UrlSerializer } from '@angular/router';
import { serviceConfig } from '../../../app.config';
// import { encode } from 'punycode';
// import { decode } from 'querystring';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    apiURL: any = null;
    isShowGeneralModule: boolean = false;
    sub: any;
    useSession: any;
    cId: any;
    sId: any;
    roleId: any;
    loggedInUser: any;
    companyCode: any;
    moduleList: any;
    public opened: boolean = false;
    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
    ngOnInit(): void {


    }

    moduleListBySiteId: any

    activedashboardpanel: boolean = false;
    card_grid_2: boolean = false;
    dashboard_card_padding: boolean = false;
    marginLeft: boolean = false;
    openPanel() {
        this.activedashboardpanel = !this.activedashboardpanel;
        this.card_grid_2 = !this.card_grid_2;
        this.dashboard_card_padding = !this.dashboard_card_padding;
        this.marginLeft = !this.marginLeft
    }
    closePanel() {
        this.activedashboardpanel = !this.activedashboardpanel;
        this.card_grid_2 = !this.card_grid_2
        this.dashboard_card_padding = !this.dashboard_card_padding;
        this.marginLeft = !this.marginLeft
    }


    navigateToSelectedDashboard(flag: number) {
        // localStorage.removeItem('dashboardId');
        // localStorage.setItem("dashboardId", flag);

        if (flag == 1) {
            alert('Navigate to Doctors Dashboard')
        } else if (flag == 2) {
            this.router.navigate(["/patients-dashboard"]);
        }

    }

}
