import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface ISpinnerState {
  show: boolean
}

@Injectable({
    providedIn: 'root'
})
export class SpinnerService {
  private spinnerSubject = new Subject();

  spinnerState = <Observable<ISpinnerState>>this.spinnerSubject;

  show() {
    this.spinnerSubject.next(<ISpinnerState>{ show: true });
  }

  hide() {
    this.spinnerSubject.next(<ISpinnerState>{ show: false });
  }
}