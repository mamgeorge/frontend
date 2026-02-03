import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Bookservice {

  constructor() { }

  // normally add functional mock or backend
  addBook(book: Book): Observable<Book> {

    // const err = new Error('ERROR: ADDING BOOK!'); return throwError(()=>err)

    return of(book);
  }
}
