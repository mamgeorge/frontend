import { createReducer, on } from '@ngrx/store';
import { AddBook, AddBookSuccess, AddBookFailure, RemoveBook } from './bookaction';
import { Book } from '../models/book';

export const initialState: Book[] = [];

export const BookReducer  = createReducer(
  initialState,
  on(AddBook, (state) => {return state} ),
  on(AddBookSuccess, (state, {id,title,author}) => [...state, { id, title, author }]),
  on(AddBookFailure, (state, { error }) => {
    console.error('Add book failed:', error);
    return state;
 }),

  on(RemoveBook, (state, { bookid }) => state.filter(book => book.id !== bookid))
);
