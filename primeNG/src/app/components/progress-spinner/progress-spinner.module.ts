import { ProgressSpinnerComponent } from './progress-spinner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    ProgressSpinnerComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule
  ],
  exports: [
    ProgressSpinnerComponent
  ]
})
export class ProgresssSpinnerModule { }
