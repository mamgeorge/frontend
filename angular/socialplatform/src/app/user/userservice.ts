import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root', })
export class Userservice {

  users = [
    { id: 1, name: "John Doe"},
    { id: 2, name: "Jane Doe"},
  ]

  constructor() { }

  getUsers() {
    return of(this.users)
  }
}
