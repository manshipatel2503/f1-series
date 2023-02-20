import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/common-utility/services/loader.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit, OnDestroy {

  loaderStatus: boolean = false;
  loaderSubscription: Subscription = new Subscription();

  constructor(private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.loaderSubscription = this.loaderService.loaderStatus.subscribe((loaderStatus: boolean) => {
      this.loaderStatus = loaderStatus;
    })
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }

}
