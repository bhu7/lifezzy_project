import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralLayoutComponent } from './containers/general-layout/general-layout.component';
import { DefaultLayoutComponent } from './containers/default-layout';
import { FooterComponent } from './containers/footer/footer.component';
import { HeaderComponent } from './containers/header/header.component';
import { FormsModule } from '@angular/forms';
import { GeneralSidebarModule } from './containers/general-sidebar/general-sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
    GeneralLayoutComponent,
    DefaultLayoutComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HeaderModule,
    GeneralSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
