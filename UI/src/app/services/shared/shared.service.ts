import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private isSideBarActive = new BehaviorSubject<boolean>(false);

  public currentActivePath = signal('/home');

  // this is the public read-only signal
  readonly currentActivePathURL = this.currentActivePath.asReadonly();

  updateCurrentActivePath(url: string) {
    console.log(`User navigated to {url}`, url);
    this.currentActivePath.set(url);
  }
}
