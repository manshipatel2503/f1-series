import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'f1',
    pathMatch:'full'
  },
  {
    path: 'f1',
    loadChildren: () => import('../app/world-championship/world-championship.module').then(m => m.WorldChampionshipModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
