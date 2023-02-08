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
              private router: Router) {}

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
      
    this.authService.login(email, password)
        .pipe(first())
        .subscribe({
            next: (data) => {
                const user: User = {
                  fullname: fullname,
                  email: data.email
                }
                localStorage.setItem('user', JSON.stringify(user));
                setTimeout(() => {
                  this.router.navigate(['/dashboard']);
                }, 1000);
            },
            error: error => {

            }
        });
  }
}
