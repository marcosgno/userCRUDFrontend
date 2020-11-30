import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  currentPage = 0;

  @Input()
  totalPages = 0;

  @Input()
  isLastPage;

  @Input()
  isFirstPage;

  @Output() toPageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {}

  toPage(page) {
    this.toPageEvent.emit(page);
  }

  toNextPage() {
    if (!this.isLastPage) {
      this.toPage(this.currentPage + 1);
    }
  }

  toPreviousPage() {
    if (!this.isFirstPage) {
      this.toPage(this.currentPage - 1);
    }
  }

  totalPagesToList() {
    const array = [];
    for (let index = 0; index < this.totalPages; index++) {
      array[index] = index + 1;
    }
    return array;
  }
}
