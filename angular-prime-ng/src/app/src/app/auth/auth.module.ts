import {ModuleWithProviders, NgModule} from "@angular/core";
import {EffectsModule} from "@ngrx/effects";
import {authReducer} from "../reducers";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {AuthEffects} from "./auth.effects";
import {StoreModule} from "@ngrx/store";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([{path:'',component:LoginComponent}]),
    StoreModule.forFeature('auth',authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
declarations: [LoginComponent,
SignupComponent],
  exports: [LoginComponent, SignupComponent]
})

export class AuthModule{
      static forRoot(): ModuleWithProviders<AuthModule> {
        return {
          ngModule: AuthModule,
          providers: [
            AuthService,
            AuthGuard
          ]
        }
      }
}
