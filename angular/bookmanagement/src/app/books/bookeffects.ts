import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import * as bookActions from './bookaction'
import { Bookservice } from './bookservice'
import { mergeMap, map, catchError, of } from 'rxjs'

@Injectable()
export class BookEffects {

  private actions$ = inject(Actions)
  private bookService = inject(Bookservice)

  addBook$ = createEffect(()=> this.actions$.pipe(
    // only run this for AddBook
    ofType(bookActions.AddBook),
    mergeMap( (action) => this.bookService.addBook(action)
      // doessomething and returns result
          // result mapped response to Success, or
        .pipe(map(book => bookActions.AddBookSuccess(book)),
          // mapped response to Failure
          catchError((error) => of(bookActions.AddBookFailure({error})))
        )
    )
  ));

  // constructor(
  //   private actions$: Actions,
  //   private bookService: Bookservice
  // ) {}
}

