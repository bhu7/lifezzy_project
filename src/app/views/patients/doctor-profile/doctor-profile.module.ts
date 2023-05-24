import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorProfileComponent } from './doctor-profile.component';
import { DoctorProfileRoutingModule } from './doctor-profile.routing.module';

@NgModule({
  declarations: [DoctorProfileComponent],
  imports: [ DoctorProfileRoutingModule],
})
export class DoctorProfileModule {
}
