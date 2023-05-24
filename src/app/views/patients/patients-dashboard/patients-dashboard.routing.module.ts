import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsDashboardComponent } from './patients-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsDashboardComponent,
    data: {
      title: 'Patients Dashboard'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  PatientsDashboardRoutingModule { }
