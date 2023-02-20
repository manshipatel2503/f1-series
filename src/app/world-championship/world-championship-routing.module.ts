import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';
import { SeasonListComponent } from './components/season-list/season-list.component';
import { SeasonResultComponent } from './components/season-result/season-result.component';

const routes: Routes = [
  {path: '', component: CoreComponent,
  children: [
    {path: '', component: SeasonListComponent},
    {path:'result/:season/:winner', component:SeasonResultComponent}
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorldChampionshipRoutingModule { }
