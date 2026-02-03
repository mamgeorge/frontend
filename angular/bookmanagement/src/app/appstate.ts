import { Book } from './models/book';

// THIS IS THE "STORE"!!!
export interface Appstate {

  readonly book: Book[]; // should be "books" but ngrx convention is different
}
