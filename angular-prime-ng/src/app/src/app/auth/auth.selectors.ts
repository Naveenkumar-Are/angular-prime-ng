import {createFeature, createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "./reducers";



export const selectAuthState=
   createFeatureSelector<AuthState>('auth');

export const isLoggedin= createSelector(
  selectAuthState,
  auth=>!! auth.user
);

export const isLoggedOut= createSelector(
  isLoggedin,
  loggedIn=>!loggedIn
);
