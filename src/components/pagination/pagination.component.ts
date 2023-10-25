import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() currentPageNumber: number = 1;
  @Input() totalPageCount: number = 1; // Add this input to handle total page count
  @Input() itemsPerPage: number = 5; // Add this input to handle items per page

  // Implement previous page logic
  prevPage() {
    if (this.currentPageNumber > 1) {
      this.currentPageNumber--;
    }
  }

  // Implement next page logic
  nextPage() {
    const totalPages = Math.ceil(this.totalPageCount / this.itemsPerPage);

    if (this.currentPageNumber < totalPages) {
      this.currentPageNumber++;
    }
  }
}
