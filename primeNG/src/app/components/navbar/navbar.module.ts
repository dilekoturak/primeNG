import { HomeComponent } from './../home/home.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { LoginComponent } from './../login/login.component';
import { NavbarComponent } from './navbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    RouterModule.forChild([
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "dashboard", component: DashboardComponent }
    ])
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
