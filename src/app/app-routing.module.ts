import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout';
import { GeneralLayoutComponent } from './containers/general-layout/general-layout.component';
import { LoginPageComponent } from './views/common/login/login-page.component';
import { LifezeeHomePageComponent } from './views/lifezee-home-page/lifezee-home-page.component';
// import { AuthGuard, ModuleAuthGuard } from '../app/core/guard';

const routes: Routes = [
  // //   {
  // //     path: '',
  // //     redirectTo: 'default-layout',
  // //     pathMatch: 'full',
  // // },

  // {
  //   path: '',
  //   redirectTo: 'lifezee-home-page',
  //   pathMatch: 'full',
  // },

  // {
  //   path: 'lifezee-home-page',
  //   component: LifezeeHomePageComponent,
  //   data: {
  //       title: 'Home Page'
  //   }
  // },
  {
    path: '',
    redirectTo: 'lifezee-home-page',
    pathMatch: 'full',
  },

  // {
  //   path: 'default-layout',
  //   component: DefaultLayoutComponent,
  //   data: {
  //     title: 'Home Page',
  //   },

  //   children: [

  //     // {
  //     //   path: 'lifezee-home-page',
  //     //   loadChildren: () => import('../app/views/lifezee-home-page/lifezee-home-page.module').then(a => a.LifezeeHomePageModule),
  //     //   // canActivate: [AuthGuard]
  //     // },

  //     // {
  //     //   path: 'login-page',
  //     //   loadChildren: () => import('../app/views/common/login/login-page.module').then(a => a.LoginPageModule),
  //     //   // canActivate: [AuthGuard]
  //     // },


  //   ]
  // },


  {
    path: '',
    component: GeneralLayoutComponent,
    data: {
      title: 'Home Page',
      breadcrumb: 'Home Page',
    },
    children: [
      //#region  ---  Patient  ---# */
      {
        path: 'lifezee-home-page',
        loadChildren: () => import('../app/views/lifezee-home-page/lifezee-home-page.module').then(a => a.LifezeeHomePageModule),
        // canActivate: [AuthGuard]
      },

      {
        path: 'login-page',
        loadChildren: () => import('../app/views/common/login/login-page.module').then(a => a.LoginPageModule),
        // canActivate: [AuthGuard]
      },

      {
        path: 'search-doctors',
        loadChildren: () => import('../app/views/patients/search-doctors/search-doctors.module').then(a => a.SearchDoctorsModule),
        // canActivate: [AuthGuard]
      },
      {
        path: 'booking-appointment',
        loadChildren: () => import('../app/views/patients/booking-appointment/booking-appointment.module').then(a => a.BookingAppointmentModule),
        // canActivate: [AuthGuard]
      },
      {
        path: 'checkout',
        loadChildren: () => import('../app/views/patients/checkout/checkout.module').then(a => a.CheckoutModule),
        // canActivate: [AuthGuard]
      },
      {
        path: 'doctor-profile',
        loadChildren: () => import('../app/views/patients/doctor-profile/doctor-profile.module').then(a => a.DoctorProfileModule),
        // canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../app/views/common/dashboard/dashboard.module').then(a => a.DashboardModule),
        // canActivate: [AuthGuard]
      },
      {
        path: 'patients-dashboard',
        loadChildren: () => import('../app/views/patients/patients-dashboard/patients-dashboard.module').then(a => a.PatientsDashboardModule),
        // canActivate: [AuthGuard]
      },



      //#endregion  ---  End  ---# */
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
