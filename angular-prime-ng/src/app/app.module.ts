import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
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
import {EffectsModule} from "@ngrx/effects";
import {AuthModule} from "./src/app/auth/auth.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {RouterState, Routes} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {AuthGuard} from "./src/app/auth/auth.guard";


const routes :Routes=[
  {
    path: 'login',
    canActivate: [AuthGuard]
  },
  {
    path:'**',
    redirectTo: '/login'
  }
]
@NgModule({
  declarations: [
    AppComponent,
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
    AuthModule.forRoot(),
    StoreModule.forRoot({

    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25,}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
