import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  userLogin: BehaviorSubject<boolean>


  constructor() {
    this.userLogin = new BehaviorSubject<boolean>(this.TokenUserLogin)
  }
  loginToken(token: string) {
    localStorage.setItem("token", token)
    this.userLogin.next(true)
  }
  logout() {
    localStorage.removeItem("token")
    this.userLogin.next(false)
  }
  get TokenUserLogin(): boolean {
    return (localStorage.getItem('token')) ? true : false
  }
  getLoggedStatus(): Observable<boolean> {
    return this.userLogin.asObservable();
  }
}
