import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { F1SeriesService } from '../../services/f1-series.service';
import { Location } from '@angular/common'
import { SeasonWinner } from '../../models/seasonWinner';
import { LoaderService } from 'src/app/common-utility/services/loader.service';

@Component({
  selector: 'app-season-result',
  templateUrl: './season-result.component.html',
  styleUrls: ['./season-result.component.scss']
})
export class SeasonResultComponent {

  season: number = 0;
  seasonResult: SeasonWinner[] = [];
  columns: { field: string, header: string }[] = [];
  worldChampionShipWinner: string = '';

  constructor(private f1SeriesService: F1SeriesService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private loaderService: LoaderService) {
    this.season = +(this.activatedRoute.snapshot.paramMap.get('season') || '0');
    this.getSeasonWinnerList();
  }

/**
 * @description Fetches the season winner list 
 * and highlights the champion using highlight 
 * key
 */
  getSeasonWinnerList() {
    this.loaderService.showLoader(true);
    this.f1SeriesService.fetchResultByYear(this.season).subscribe((response: SeasonWinner[]) => {
      this.seasonResult = this.highLightWorldChampion(response);
      this.loaderService.showLoader(false);

      // Initialize columns for custom table
      this.columns = [
        { field: 'driverName', header: 'Driver' },
        { field: 'nationality', header: 'Nationality' },
        { field: 'raceName', header: 'Race' },
        { field: 'circuitName', header: 'Circuit' },
        { field: 'constructorName', header: 'Constructor' },
        { field: 'laps', header: 'Laps' },
        { field: 'grid', header: 'Grid' },
        { field: 'time', header: 'Time' }]
    });
  }


  /**
    * @description gets world champion from 
    * routeparam and add highlight as a key 
    * to the seasonWinnerResult list
    * @param seasonWinnerResult 
    */
  highLightWorldChampion(seasonWinnerResult: SeasonWinner[]) {
    const worldChampion = this.activatedRoute.snapshot.paramMap.get('winner');
    seasonWinnerResult.forEach(result => {
      result.highlight = result.driverId === worldChampion;
    });
    return seasonWinnerResult;
  }

  /**
   * @description gets world champion from 
   * routeparam and add highlight as a key 
   * to the seasonWinnerResult list
   * @param seasonWinnerResult 
   */
  getTitle() {
    return `${this.season} Driver Standings`;
  }

  /**
   * @description returns to the previous page
   */
  back(): void {
    this.location.back()
  }

}
