import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() max: number = 200;
  @Input() length = 1;
  @Input() perPage = 10;
  showFromIndex: number = 0;
  showToIndex: number = 10;
  @Output() paginationAction = new EventEmitter<any>();
  totalPages = 1;
  totalPagesMax = false;
  showPaginator = true;
  loading = true;
  currentPage = 1;
  showForwardButton = true;
  showBackButton = false;

  ngOnInit() {
    this.initialize();
  }

  /**
    * @description initializes pagination 
    * params and function calls
    */
  initialize() {
    this.loading = true;
    this.currentPage = 1;
    this.calcNumberOfPages();
    this.isMaxPages();
    this.checkPaginationButtons();
    this.calculateDisplayedIndexes();
    this.paginationChange();
    this.loading = false;
  }


  /**
   * @description emits event to parent component 
   * and emits fromIndex to showIndex 
   */
  paginationChange() {
    this.paginationAction.emit({
      showFromIndex: this.showFromIndex,
      showToIndex: this.showToIndex
    });
  }

  /**
    * @description calculates the number of 
    * pages and returns it
    */
  calcNumberOfPages() {
    const length = +this.length || 0;
    const perPage = +this.perPage || 0;
    let result;
    // Calculate the number of pages
    const resultRounded = Math.round(length / perPage);
    const resultActual = length / perPage;
    // account for discrepancy when rounding down
    if (resultRounded < resultActual) {
      result = resultRounded + 1;
    } else {
      result = resultRounded;
    }
    return result;
  }

  /**
    * @description calculates the total pages 
    * and maxPage value
    */
  isMaxPages() {
    const max = +this.max || 0;
    this.totalPages = this.calcNumberOfPages();
    // When the number of pages is over the defined (or default) max, change the message
    if (this.totalPages <= max) {
      this.totalPagesMax = false;
    } else {
      this.totalPagesMax = true;
    }
  }

  /**
   * @description updates perPage value
   *  on page change event
   * @param $event page change event
   */
  updatePagination($event: any) {
    const ele = $event.srcElement;
    if (ele.value === 'all') {
      this.perPage = this.length;
    } else {
      this.perPage = (1 * ele.value);
    }
    this.initialize();
  }

  /**
    * @description increment and decrement
    *  from current page on click of
    *  respective button
    * @param $event increment decrement
    *  button event
    */
  changePage($event: any) {
    const element = $event.srcElement;
    const direction = element.value;
    switch (direction) {
      case '+': {
        this.incrementCurrentPage();
        break;
      }
      case '-': {
        this.decrementCurrentPage();
        break;
      }
      default: {
        console.error(
          'Something went wrong while changing pages. Value = ',
          direction
        );
        break;
      }
    }
  }

  /**
  * @description increment current pages
  * and refresh pagination
  */
  incrementCurrentPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    } else {
      this.currentPage = 1;
    }
    this.calculateDisplayedIndexes();
    this.checkPaginationButtons();
    this.paginationChange();
  }

  /**
   * @description decrement current page 
   * and refresh pagination
   */
  decrementCurrentPage() {
    if (this.currentPage - 1 >= 1) {
      this.currentPage--;
    }
    this.calculateDisplayedIndexes();
    this.checkPaginationButtons();
    this.paginationChange();
  }

  /**
  * @description calculates the 
  * fromIndex property
  */
  calculateDisplayedIndexes() {
    if (this.currentPage === 1) {
      this.showFromIndex = 0;
    } else {
      this.showFromIndex = (this.currentPage - 1) * this.perPage;
    }

    this.showToIndex = this.showFromIndex + this.perPage;
    // showToIndex should never surpass the length of the data
    if (this.showToIndex > this.length) {
      this.showToIndex = this.length;
    }
  }

  /**
  * @description manages displaying of 
  * pagination buttons
  */
  checkPaginationButtons() {
    // Check forward/backward buttons to disable when required
    if (this.currentPage === this.totalPages) {
      this.showForwardButton = false;
    } else {
      this.showForwardButton = true;
    }
    if (this.currentPage === 1) {
      this.showBackButton = false;
    } else {
      this.showBackButton = true;
    }
  }
}
