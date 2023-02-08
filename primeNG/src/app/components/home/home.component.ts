import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { 
    const user = this.authService.userValue;
    if (user) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
  }

}
