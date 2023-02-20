import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/common-utility/services/loader.service';
import { Champion } from '../../models/champion';
import { F1SeriesService } from '../../services/f1-series.service';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.scss']
})
export class SeasonListComponent {

  championList: Champion[] = [];

  constructor(private f1SeriesService: F1SeriesService,
    private router: Router,
    private loaderService: LoaderService){
    this.fetchSeasonData();
  }

  /**
    * @description gets world champion from 
    * routeparam and add highlight as a key 
    * to the seasonWinnerResult list
    * @param seasonWinnerResult 
    */
  fetchSeasonData(){
    this.loaderService.showLoader(true);
    this.f1SeriesService.fetchSeasonChampion().subscribe((championList: Champion[]) =>{
      this.championList = championList;
      this.loaderService.showLoader(false);
    });
  }

   /**
    * @description navigates to the winners page for the season
    * @param year season year  
    * @param driverId champion id for highlighting winner
    */
  viewWinners( year:string, driverId: string){
    this.router.navigateByUrl(`f1/result/${year}/${driverId}`)
  }
}
