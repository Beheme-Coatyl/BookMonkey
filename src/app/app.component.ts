import { Component } from '@angular/core';
import { Book } from './shared/book';


@Component({
  selector: 'bm-root',
  template: `<bm-book-list *ngIf="listOn"(showDetailsEvent)="showDetails($event)"></bm-book-list>
    <bm-book-details *ngIf="detailsOn"(showListEvent)="showList()"[book]="book"></bm-book-details>`,
  styles: []
})
export class AppComponent {
  book: Book;

  listOn = true;
  detailsOn = false;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {

    console.log('AppComponent.showDetails(): ' + book.title);

    this.book = book;
    this.listOn = false;
    this.detailsOn = true;
  }
}
