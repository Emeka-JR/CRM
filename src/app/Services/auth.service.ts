import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthResponse } from '../Model/AuthResponse';
import { catchError, Subject, tap, throwError } from 'rxjs';
import { error } from 'console';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http: HttpClient = inject(HttpClient);
  user= new Subject<User>();


  signup(email: any, password: any) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http.post<AuthResponse>
      (
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlJMEfrvv59vu__QP8vCAkQUsIh_5Pnts',
        data
      )
      .pipe(catchError(this.handleError),tap((res) => {
        this.handleCreateUser(res)
      }))
  }

  login(email: any, password: any) {
    const data = { email: email, password: password, returnSecureToken: true };
    return this.http.post<AuthResponse>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlJMEfrvv59vu__QP8vCAkQUsIh_5Pnts',
      data
    ).pipe(catchError(this.handleError),tap((res) => {
      this.handleCreateUser(res)
    }))
  }

  private handleCreateUser(res: any){
    const expiresInTs = new Date().getTime() + +res.expiresIn * 1000;
        const expiresIn = new Date(expiresInTs);
        const user= new User(res.email, res.localId,res.idToken,expiresIn);
        this.user.next(user);
  }

  private handleError(err: any) {
    let errorMessage = 'An unknown error has occured'
    console.log(err);
    if (!err.error || !err.error.error) {
      return throwError(() => errorMessage);
    }
    switch (err.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = "This email already exists."
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = "This operation is not allowed."
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = "Too many attempts, please try again later."
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'The email ID or password is incorrect.';
        break;
      case 'USER_DISABLED':
        errorMessage = 'This account has been disabled';
        break;
    }
    return throwError(() => errorMessage);
  }
  constructor() { }
}
