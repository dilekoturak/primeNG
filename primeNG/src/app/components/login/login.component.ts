import { User } from 'src/app/models/user';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted: boolean = true;
  regex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private router: Router) {
                const user = this.authService.userValue;
                if (user) {
                  this.router.navigate(['/dashboard']);
                }
              }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      fullname: [''],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.pattern(this.regex)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    const fullname: string = this.f['fullname'].value;
    const email: string = this.f['email'].value;
    const password: string =  this.f['password'].value;
      
    this.authService.login(fullname, email, password)
        .pipe(first())
        .subscribe({
            next: (data) => {
                localStorage.setItem('user', JSON.stringify(data));
                this.router.navigate(['/dashboard']);
            },
            error: error => {

            }
        });
  }
}
