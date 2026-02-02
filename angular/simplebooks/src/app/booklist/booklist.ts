import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Book } from '../models/book';
@Component({
  selector: 'app-booklist',
  standalone: false,
  templateUrl: './booklist.html',
  styleUrl: './booklist.css',
})
export class Booklist implements OnInit {

  newBookTitle : string = ''
  newBookAuthor: string = ''
  booklist: Book[] = []

  ngOnInit(): void {

    let savedBooks = localStorage.getItem('booklist')
    this.booklist = savedBooks ? JSON.parse(savedBooks) : []
    console.log(this.booklist.length + ' book(s) loaded!')
  }

  addBook(): void {

    if (this.newBookTitle.trim().length && this.newBookAuthor) {

      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      }

      this.booklist.push(newBook);
      localStorage.setItem('booklist', JSON.stringify(this.booklist));

      this.newBookTitle = ''
      this.newBookAuthor = ''

      console.log(this.booklist.length + ' book(s) total!')
    }
  }

  delBook(index: number): void {

    this.booklist.splice(index, 1)
    localStorage.setItem('booklist', JSON.stringify(this.booklist))
    console.log(this.booklist.length + ' book(s) remaining!')
  }
}
