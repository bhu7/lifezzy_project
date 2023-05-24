import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { GeneralSidebarModule } from '../general-sidebar/general-sidebar.module';


@NgModule({
    // declarations: [HeaderComponent],
    imports: [ GeneralSidebarModule ],
    // exports: [HeaderComponent]
})
export class HeaderModule { }