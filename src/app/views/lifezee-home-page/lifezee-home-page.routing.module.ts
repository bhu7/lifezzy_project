import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifezeeHomePageComponent } from './lifezee-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LifezeeHomePageComponent,
    data: {
      title: 'LifeZee'
    }

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifezeeHomePageRoutingModule { }
