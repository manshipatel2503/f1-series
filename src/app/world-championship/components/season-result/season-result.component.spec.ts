import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonResultComponent } from './season-result.component';
import { F1SeriesService } from '../../services/f1-series.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeaderComponent } from 'src/app/common-utility/header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { CustomTableComponent } from 'src/app/shared/components/custom-table/custom-table.component';
import { ActivatedRoute } from '@angular/router';
import { SeasonWinner } from '../../models/seasonWinner';

describe('SeasonResultComponent', () => {
  let component: SeasonResultComponent;
  let fixture: ComponentFixture<SeasonResultComponent>;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  let header: HeaderComponent;
  let customTable: CustomTableComponent;
  let f1Service: F1SeriesService;
  let route: ActivatedRoute;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule],
      declarations: [SeasonResultComponent, HeaderComponent, CustomTableComponent],
      providers: [F1SeriesService]

    })
      .compileComponents();


    fixture = TestBed.createComponent(SeasonResultComponent);

    let headerEl = fixture.debugElement.query(By.directive(HeaderComponent));
    header = headerEl.componentInstance;

    let customTableEl = fixture.debugElement.query(By.directive(CustomTableComponent));
    customTable = customTableEl.componentInstance;
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    route = TestBed.inject(ActivatedRoute);

    f1Service = TestBed.inject(F1SeriesService);

    fixture = TestBed.createComponent(SeasonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set highlight for world champion', () => {
    const seasonWinnerList = [new SeasonWinner({
      circuitName: "Albert Park Grand Prix Circuit",
      constructorName: "Renault",
      driverId: "fisichella",
      driverName: "Giancarlo Fisichella",
      grid: "1",
      highlight: false,
      laps: "57",
      nationality: "Italian",
      raceName: "Australian Grand Prix",
      time: "1:24:17.336"
    }),
    new SeasonWinner({
      circuitName: "Sepang International Circuit",
      constructorName: "Renault",
      driverId: "alonso",
      driverName: "Fernando Alonso",
      grid: "1",
      highlight: true,
      laps: "56",
      nationality: "Spanish",
      raceName: "Malaysian Grand Prix",
      time: "1:31:33.736"
    })];
    route.snapshot.paramMap.get = (key: string) => 'alonso';
    component.highLightWorldChampion(seasonWinnerList);
    expect(seasonWinnerList[0].highlight).toBe(false);
    expect(seasonWinnerList[1].highlight).toBe(true);
  });

});
