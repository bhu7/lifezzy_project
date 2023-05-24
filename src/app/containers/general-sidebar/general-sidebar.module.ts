import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralSidebarComponent } from './general-sidebar.component';


@NgModule({
  declarations: [GeneralSidebarComponent],
  imports: [CommonModule],
  exports:[GeneralSidebarComponent]
})
export class GeneralSidebarModule { }