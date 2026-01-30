import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App { // export makes class available to other modules

  titleDate: string = (new Date()).toISOString().substring(0, 10); // can leave off type declarations: ": string"
  protected readonly title = signal('appointment'); // can leave off ";" if on newline

  private funcLog(textAny: string): void { // public is default; void is not needed
    var msg: string = 'INFO: ' + textAny; console.log(msg);
    // this.anything; // "this" is mandatory for fields/methods accessed within class
    // var app: App = new App(); // can create instances of own class
  }
}
