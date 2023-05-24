import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  PatientsDashboardComponent } from './patients-dashboard.component';
import {  PatientsDashboardRoutingModule } from './patients-dashboard.routing.module';

@NgModule({
  declarations: [PatientsDashboardComponent],
  imports: [ PatientsDashboardRoutingModule],
})
export class  PatientsDashboardModule {
}
