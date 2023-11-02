import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input() currentPage: number = 0;
  @Input() total: number = 0;
  @Output() onPageChange = new EventEmitter<number>();

  public previous(): void {
    if (this.currentPage > 1) {
      this.onPageChange.emit(this.currentPage - 1);
    }
  }

  public next(): void {
    if (this.currentPage < this.total) {
      this.onPageChange.emit(this.currentPage + 1);
    }
  }
}
