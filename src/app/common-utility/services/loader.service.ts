import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public loaderStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * @description changes loader status
   */
  showLoader(status: boolean) {
    this.loaderStatus.next(status);
  }
}
