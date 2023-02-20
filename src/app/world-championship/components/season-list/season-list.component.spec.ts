import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from 'src/app/common-utility/header/header.component';
import { F1SeriesService } from '../../services/f1-series.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SeasonListComponent } from './season-list.component';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Champion } from '../../models/champion';

describe('SeasonListComponent', () => {
  let component: SeasonListComponent;
  let fixture: ComponentFixture<SeasonListComponent>;
  let f1Service: F1SeriesService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let header: HeaderComponent;
  let router: Router;
  let route: ActivatedRoute;

  

  beforeEach(async () => {


    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule],
      declarations: [SeasonListComponent, HeaderComponent],
      providers: [F1SeriesService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SeasonListComponent);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);

    let headerEl = fixture.debugElement.query(By.directive(HeaderComponent));
    header = headerEl.componentInstance;
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    f1Service = TestBed.inject(F1SeriesService);



  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize championList to an empty array', () => {
    expect(component.championList).toEqual([]);
  });


  it('should set championList property after fetching season data', () => {
    let mockChampionList : Champion[] = [new Champion(
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
      })];
    spyOn(f1Service, 'fetchSeasonChampion').and.returnValue(of(mockChampionList));
    component.fetchSeasonData();
    expect(component.championList).toEqual(mockChampionList);
  });

  it('should navigate to correct URL when viewWinners is called', () => {
    const year = "2021";
    const driverId = 'verstappen';
    spyOn(router, 'navigateByUrl');
    component.viewWinners(year, driverId);
    expect(router.navigateByUrl).toHaveBeenCalledWith(`f1/result/${year}/${driverId}`);
  });
  
});
