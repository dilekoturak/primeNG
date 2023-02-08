import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedinUserName: any = '';
  loginStatus: Observable<boolean> | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.onChange();
  }

  onChange(): void {
    this.loggedinUserName = this.authService.userValue?.fullname;
    this.loginStatus = this.authService.loginStatus.pipe(map(status => {
      return status;
    }));
  }

  logout() : void {
    this.authService.logout();
  }
}
