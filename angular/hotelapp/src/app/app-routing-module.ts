import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Reservationform } from './reservationform/reservationform';
import { Reservationlist } from './reservationlist/reservationlist';

const routes: Routes = [

  { path: '', component: Home },
  { path: 'list', component: Reservationlist },
  { path: 'new', component: Reservationform },
  { path: 'edit/:id', component: Reservationform }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
