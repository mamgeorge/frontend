import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/bookaction';
import { Appstate } from '../appstate';

@Component({
  selector: 'app-booklist',
  standalone: false,
  templateUrl: './booklist.html',
  styleUrl: './booklist.css',
})
export class Booklist {

  books$: Observable<Book[]>;

  constructor(private store: Store<Appstate>) {
    this.books$ = this.store.pipe(select('book')); // should be "books" but ngrx convention is different
  }

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({ id, title, author }));
  }

  removeBook(id: string) {
    this.store.dispatch(RemoveBook({ bookid: id }));
  }
}
