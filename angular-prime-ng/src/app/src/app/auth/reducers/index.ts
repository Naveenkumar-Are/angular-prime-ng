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
  on(AuthActions.login, (state, action) => {
    return {
      ...state,
      user: action.user
    };
  }),

  on(AuthActions.signup, (state, action) => {
    return {
      ...state,
      user: undefined // Assuming signup clears previous user info
    };
  }),

  on(AuthActions.signupSuccess, (state, action) => {
    return {
      ...state,
      // Handle any additional logic based on signup success if needed
    };
  }),

  on(AuthActions.signupFailure, (state, action) => {
    return {
      ...state,
      // Handle any error state or rollback changes if needed
    };
  }),

  on(AuthActions.logOut, (state, action) => {
    return {
      ...state,
      user: undefined
    };
  })
);

