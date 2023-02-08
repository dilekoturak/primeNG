import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User | null>;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private router: Router,
              private http: HttpClient) { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
  }

  public get userValue() {
    return this.userSubject.value;
  }

  public get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  
  login(email: string, password: string) {      
      return this.http.get<any>(environment.apiUrl)
          .pipe(map(user => {
              if (email == user.email && password == user.password) {
                this.userSubject.next(user);
                this.loggedIn.next(true);
              }
              return user;
          }));
  }
}
