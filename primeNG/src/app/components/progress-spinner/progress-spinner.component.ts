import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISpinnerState, SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit, OnDestroy {

  visible = false;

  private spinnerStateChanged!: Subscription;

  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.spinnerStateChanged = this.spinnerService.spinnerState
      .subscribe((state: ISpinnerState) => this.visible = state.show);
  }

  ngOnDestroy() {
    this.spinnerStateChanged.unsubscribe();
  }
}
