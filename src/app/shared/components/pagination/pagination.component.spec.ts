import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { EventEmitter } from '@angular/core';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let paginationActionSpy: jasmine.Spy;
  let paginationActionEmitter: EventEmitter<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    paginationActionEmitter = new EventEmitter<any>();
    component.paginationAction = paginationActionEmitter;
    paginationActionSpy = spyOn(component.paginationAction, 'emit');

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the correct pagination data', () => {
    component.showFromIndex = 0;
    component.showToIndex = 9;
    component.paginationChange();
    expect(paginationActionSpy).toHaveBeenCalledWith({
      showFromIndex: 0,
      showToIndex: 9
    });
  });

  it('should calculate the number of pages correctly', () => {
    component.length = 50;
    component.perPage = 10;

    const result = component.calcNumberOfPages();

    expect(result).toEqual(5);
  });
  it('should set totalPagesMax to true when the number of pages is over the max', () => {
    component.length = 100;
    component.perPage = 10;
    component.max = 5;

    component.isMaxPages();

    expect(component.totalPagesMax).toBe(true);
  });

  it('should decrement the current page correctly', () => {
    component.currentPage = 2;
    component.totalPages = 5;
    component.perPage = 10;
    component.length = 50;
    component.showFromIndex = 10;
    component.showToIndex = 20;

    component.decrementCurrentPage();

    expect(component.currentPage).toEqual(1);
    expect(component.showFromIndex).toEqual(0);
    expect(component.showToIndex).toEqual(10);
  });
});
