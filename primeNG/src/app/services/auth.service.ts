import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userSubject: BehaviorSubject<User | null>;
  public loginStatus: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, 
              private router: Router) { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus()!);
  }
  public get userValue() {
    return this.userSubject.value;
  }
  
  login(fullname: string, email: string, password: string) {      
      return this.http.get<any>(environment.apiUrl)
          .pipe(map(res => {
              const usersData = res.users;
              const user = usersData.find((u:any) => {
                return u.email == email && u.password == password;
              })
              
              if (user) {
                const newUser = {...user, fullname: fullname};
                this.userSubject.next(newUser);
                this.loginStatus.next(true);
                return newUser;
              }
              return null
          }), catchError(() => {
            return throwError(() => new Error('Something went wrong while logging'));
          }))
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.loginStatus.next(false)
    this.router.navigate(['/login']);
  }

  checkLoginStatus(): boolean {
    const user = localStorage.getItem('user');
    return user ? true : false;
  }
}
