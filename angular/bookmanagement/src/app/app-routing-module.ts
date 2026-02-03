import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Booklist } from './booklist/booklist';

const routes: Routes = [
  { path: '', component: Booklist },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
