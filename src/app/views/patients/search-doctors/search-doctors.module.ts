import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchDoctorsComponent } from './search-doctors.component';
import { SearchDoctorsRoutingModule } from './search-doctors.routing.module';

@NgModule({
  declarations: [SearchDoctorsComponent],
  imports: [ SearchDoctorsRoutingModule],
})
export class SearchDoctorsModule {
}
