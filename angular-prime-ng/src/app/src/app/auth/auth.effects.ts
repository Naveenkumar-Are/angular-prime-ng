import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Router } from "@angular/router";
import { AuthActions } from "./action-types";
import { exhaustMap, tap, catchError, map } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { of } from "rxjs";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(action =>
        this.authService.login(action.user.userName, action.user.password).pipe(
          map(user => AuthActions.loginSuccess({ user })),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      ),
      tap(action => {
        if (action.type === AuthActions.loginSuccess.type) {
          localStorage.setItem('user', JSON.stringify(action.user));
        }
      })
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signup),
      exhaustMap(action =>
        this.authService.signUp(action.user).pipe(
          map(() => AuthActions.signupSuccess({ message: 'Signup successful' })),
          catchError(error => of(AuthActions.signupFailure({ error })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.logOut),
        tap(() => {
          localStorage.removeItem('user');
          this.router.navigateByUrl('/signin');
        })
      ),
    { dispatch: false }
  );
}
