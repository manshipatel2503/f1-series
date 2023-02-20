import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Champion } from '../models/champion';
import { SeasonWinner } from '../models/seasonWinner';

@Injectable({
  providedIn: 'root'
})
export class F1SeriesService {

  constructor(private httpClient: HttpClient) { }

  /**
   * @description Fetches champions from season 2005 - current year
  */
  fetchSeasonChampion(): Observable<Champion[]> {
    return this.httpClient.get(`${environment.serverUrl}/api/f1/driverStandings/1.json?offset=55`).pipe
      ((map((data: any) => (data.MRData.StandingsTable.StandingsLists))),
        map((data: any) => data.map((data: any) => new Champion().championMapper(data))),
        catchError(this.handleError<Champion[]>('Fetch Champion', [])));
  }

  /**
   * @description Fetch winners of the particular season
   * @param year Season for which winners are getting fetched
  */
  fetchResultByYear(year: number) {
    return this.httpClient.get(`${environment.serverUrl}/api/f1/${year}/results/1.json`).pipe
      ((map((data: any) => (data.MRData.RaceTable.Races))),
        map((data: any) => data.map((data: any) => new SeasonWinner().seasonWinnerMapper(data))),
        catchError(this.handleError<Champion[]>('Fetch Result', [])));
  }

  /**
* @description Handle Http operation that failed. Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("operation" + operation + 'failed');
      // return error
      return of(result as T);
    };
  }
}
