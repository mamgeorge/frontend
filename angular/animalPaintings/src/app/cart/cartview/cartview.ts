import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../cartservice';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cartview',
  standalone: false,
  templateUrl: './cartview.html',
  styleUrl: './cartview.css',
})
export class Cartview implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: Cartservice) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data => {
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    });
  }

  getTotalPrice(): number {

    let total=0;
    for (let item of this.cartItems) {
      total += item.price;
    }
    return total;
  }

  clearCart(): void {
    this.cartService.clearCart().subscribe();
    this.cartItems = [];
    this.totalPrice = 0;
  }

  checkout():void {
    this.cartService.checkout(this.cartItems).subscribe();
  }

}
