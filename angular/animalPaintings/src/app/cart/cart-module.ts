import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cartview } from './cartview/cartview';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    Cartview
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule
  ]
})
export class CartModule { }
