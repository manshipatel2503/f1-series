import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {
  @Input() tableData: any[] = [];
  @Input() headerData: { field: string, header: string }[] = [];
  @Input() paginatorCounterMax: any = 1000;
  @Input() paginationItemsPerPage: number = 3;
  @ViewChild('dataTableHeader') public dataTableHeader: any;
  @ViewChild('dataTableBody') public dataTableBody: any;
  @Output() ifRowClicked = new EventEmitter<any>();
  cols:{header: string,field: string }[] = [];
  showFromIndex: number;
  showToIndex: number;

  constructor() {
    this.showFromIndex = 0;
    this.showToIndex = 3;
  }

  /**
     * @description Once user changes pagination paginationChange
     *  changes the indexes of the rows to be shown
     * @param $event pagination change event from child 
     * pagination component sends event with 
     * store indexes selected by user
     */
  paginationChange($event: any) {
    this.showFromIndex = $event.showFromIndex;
    this.showToIndex = $event.showToIndex;
  }
}
