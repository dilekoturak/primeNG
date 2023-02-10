import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarModule } from './navbar/navbar.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgresssSpinnerModule } from './progress-spinner/progress-spinner.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    LoginModule,
    NavbarModule,
    DashboardModule,
    ProgresssSpinnerModule
  ],
  exports: [
    HomeModule,
    LoginModule,
    NavbarModule,
    DashboardModule,
    ProgresssSpinnerModule
  ]
})
export class UiModule { }
