import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { User } from "../model/user.model";
import { catchError, tap } from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    const body = { username, password };
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http
      .post<User>("http://localhost:3000/signin", body, { headers })
      .pipe(
        tap((response: any) => {
          // Check if token exists in response
          const token = response.token;
          if (token) {
            // Store token in localStorage or sessionStorage
            localStorage.setItem("token", token);
            // You can also decode the token and store user details if needed
          }else {
            console.error("Login failed: Token not found in response");}

        }),
        catchError((error) => {
          console.error("Login failed:", error);
          return throwError(error);
        })
      );
  }

  signUp(userData: any): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.post<any>("http://localhost:3000/signup", userData, { headers }).pipe(
      catchError(error => {
        console.error('Sign up failed:', error);
        return throwError(error);
      })
    );
  }
}
