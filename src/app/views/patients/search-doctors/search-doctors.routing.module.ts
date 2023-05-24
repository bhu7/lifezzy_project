import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDoctorsComponent } from './search-doctors.component';

const routes: Routes = [
  {
    path: '',
    component: SearchDoctorsComponent,
    data: {
      title: 'Search Doctors'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchDoctorsRoutingModule { }
