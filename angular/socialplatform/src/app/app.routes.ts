import {NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { Userlist } from './user/userlist/userlist';

export const routes: Routes = [
  {path: "", component: Userlist}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes{}
