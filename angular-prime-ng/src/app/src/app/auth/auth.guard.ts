import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable, tap} from "rxjs";
import {select, Store} from "@ngrx/store";
import {isLoggedin} from "./auth.selectors";
import {AppState} from "./reducers";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.store.pipe(
      select(isLoggedin),
      tap(loggedIn=>{
        if(!loggedIn){
          this.router.navigateByUrl('/login');
        }
      })
    )
  }

}
