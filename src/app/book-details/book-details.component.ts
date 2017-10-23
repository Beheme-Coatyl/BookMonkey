import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';


@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html'
})

export class BookDetailsComponent {
  @Input() book: Book;

  @Output() showListEvent = new EventEmitter<any>();


  getRating(num: number) {
    console.log('BookDetailsComponent.getRating(): ' + this.book.title);

    return new Array(num);
  }

  showBookList() {
    console.log('BookDetailsComponent.showBookList(): ' + this.book.title);

    this.showListEvent.emit();
  }

}
