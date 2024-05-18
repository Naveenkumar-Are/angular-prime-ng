import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";
import { isLoggedin } from "./auth.selectors";
import { AppState } from "./reducers";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(isLoggedin).pipe(
      map(loggedIn => {
        if (loggedIn) {
          //
          return true;
        } else {

          const user = localStorage.getItem('user');
          if (user) {

            return true;
          } else {

            this.router.navigateByUrl('signin');
            return false;
          }
        }
      })
    );
  }
}
