import { User } from "../../model/user.model";
import { ActionReducer, createReducer, on } from "@ngrx/store";
import { AuthActions } from "../action-types";

export interface AppState {
  auth: AuthState;
}

export interface AuthState {
  user: User | undefined;
}

export const initialAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.loginSuccess, (state, {user}) => {
    return {
      ...state,
      user
    };
  }),

  on(AuthActions.signup, (state, action) => ({
    ...state,
    error: undefined // Clear any previous errors
  })),
  // Handle signup success
  on(AuthActions.signupSuccess, (state, { message }) => ({
    ...state,
    error: undefined // Clear any previous errors
    // You can add any additional state updates if needed
  })),
  // Handle signup failure
  on(AuthActions.signupFailure, (state, { error }) => ({
    ...state,
    error // Store the error in the state
  })),
  // Handle logout action
  on(AuthActions.logOut, state => ({
    ...state,
    user: undefined, // Clear the user from the state
    error: undefined // Clear any errors
  }))




);

