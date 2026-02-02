import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {

  titleDate: string = (new Date()).toISOString().substring(0, 10); // can leave off type declarations: ": string"
  protected readonly title = signal('bookmanagementsystem');
}
