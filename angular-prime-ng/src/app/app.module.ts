import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './src/app/auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {CalendarIcon} from "primeng/icons/calendar";
import {CalendarModule} from "primeng/calendar";
import {AnimateModule} from "primeng/animate";
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {ChartModule} from "primeng/chart";
import { SignupComponent } from './src/app/auth/signup/signup.component';
import {RadioButtonModule} from "primeng/radiobutton";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    DropdownModule,
    ReactiveFormsModule,
    CalendarIcon,
    CalendarModule,
    AnimateModule,
    AnimateOnScrollModule,
    RadioButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
