import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarModule } from './navbar/navbar.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    NavbarModule,
    DashboardModule
  ],
  exports: [
    HomeModule,
    LoginModule,
    NavbarModule,
    DashboardModule
  ]
})
export class UiModule { }
