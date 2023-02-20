import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonListComponent } from './components/season-list/season-list.component';
import { WorldChampionshipRoutingModule } from './world-championship-routing.module';
import { CommonUtilityModule } from '../common-utility/common-utility.module';
import { SeasonResultComponent } from './components/season-result/season-result.component';
import { CoreComponent } from './components/core/core.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SeasonListComponent,
    SeasonResultComponent,
    CoreComponent
  ],
  imports: [
    CommonModule,
    WorldChampionshipRoutingModule,
    CommonUtilityModule,
    SharedModule
  ],
  })
export class WorldChampionshipModule { }
