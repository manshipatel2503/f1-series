import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    CustomTableComponent,
    PaginationComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CustomTableComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
