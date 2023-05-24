import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageRoutingModule } from './login-page.routing.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [LoginPageComponent]

})
export class LoginPageModule { }



