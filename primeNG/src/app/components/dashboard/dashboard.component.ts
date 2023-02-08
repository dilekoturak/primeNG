import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ MessageService ]
})
export class DashboardComponent implements OnInit {

  loginStatus: Observable<boolean> | undefined;
  constructor(private authService:AuthService, private message: MessageService) {}

  ngOnInit(): void {
    this.onChange()
  }

  // TODO - show toast only first page load
  onChange() {  
    return this.authService.loginStatus
      .pipe()
      .subscribe({
        next: (res) => {
          setTimeout(() => {
            this.message.add({ severity:'success', summary:'Login Successful' });
          }, 1000);
        }
    });
  }
}
