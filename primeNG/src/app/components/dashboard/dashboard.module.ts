import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    RouterModule.forChild([
      { path: "", component: DashboardComponent }
    ])
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
