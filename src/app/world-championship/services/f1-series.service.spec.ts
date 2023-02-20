import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Champion } from '../models/champion';
import { SeasonWinner } from '../models/seasonWinner';

import { F1SeriesService } from './f1-series.service';

describe('F1SeriesService', () => {
  let service: F1SeriesService;
  let mockHttpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [mockHttpClient]
    });
    service = new F1SeriesService(mockHttpClient)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return season list', () => {
    const mockData = [new Champion(
      {
        constructorName: "Renault",
        constructorNationality: "French",
        constructorUrl: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
        driver: {
          code: "ALO",
          dateOfBirth: "1981-07-29",
          driverId: "alonso",
          fullName: "Fernando Alonso",
          nationality: "Spanish",
          permanentNumber: "14",
          url: "http://en.wikipedia.org/wiki/Fernando_Alonso"
        },
        points: "133",
        rounds: "19",
        season: "2005",
        wins: "7"
      }
    )];
    let expectedResult: Champion[] = [];
    spyOn(service, 'fetchSeasonChampion').and.returnValue(of(mockData));
    service.fetchSeasonChampion().subscribe(res => { expectedResult = res });
    expect(expectedResult).toEqual(mockData);
  })


  it('should return result of particular season', () => {
    const mockData: SeasonWinner[] = [new SeasonWinner({
      "Circuit": {
        "Location": {
          "country": "Bahrain",
          "lat": "26.0325",
          "locality": "Sakhir",
          "long": "50.5106",
        },
        "circuitId": "bahrain",
        "circuitName": "Bahrain International Circuit",
        "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit"
      },
      "Results": [
        {
          "Constructor": {
            "constructorId": "ferrari",
            "name": "Ferrari",
            "nationality": "Italian",
            "url": "http://en.wikipedia.org/wiki/Scuderia_Ferrari",
          },
          "Driver": {
            "code": "ALO",
            "dateOfBirth": "1981-07-29",
            "driverId": "alonso",
            "familyName": "Alonso",
            "givenName": "Fernando",
            "nationality": "Spanish",
            "permanentNumber": "14",
            "url": "http://en.wikipedia.org/wiki/Fernando_Alonso"
          },
          "Time": {
            "millis": "5960396",
            "time": "1:39:20.396"
          },
          "grid": "3",
          "laps": "49",
          "number": "8",
          "points": "25",
          "position": "1",
          "positionText": "1",
          "status": "Finished"
        }
      ],
      "date": "2010-03-14",
      "raceName": "Bahrain Grand Prix",
      "round": "1",
      "season": "2010",
      "time": "12:00:00Z",
      "url": "http://en.wikipedia.org/wiki/2010_Bahrain_Grand_Prix"
    })]
    let expectedResult: SeasonWinner[] = [];
    const year = 2005;
    spyOn(service, 'fetchResultByYear').and.returnValue(of(mockData));
    service.fetchResultByYear(year).subscribe(res => { expectedResult = res });
    expect(expectedResult).toEqual(mockData);
  });
});

