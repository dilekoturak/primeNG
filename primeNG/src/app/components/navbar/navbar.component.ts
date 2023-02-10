import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedinUser: Observable<any> | undefined;
  loginStatus: Observable<boolean> | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.onChange();
  }

  onChange(): void {
    this.loggedinUser = this.authService.userSubject.pipe(map(user => user));
    this.loginStatus = this.authService.loginStatus.pipe(map(status => status));
  }

  logout() : void {
    this.authService.logout();
  }
}
