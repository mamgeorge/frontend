import { Component, OnInit } from '@angular/core';
import { Productservice } from '../productservice';
import { Product } from '../../models/product';
import { Cartservice } from '../../cart/cartservice';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-productlist',
  standalone: false,
  templateUrl: './productlist.html',
  styleUrl: './productlist.css',
})
export class Productlist implements OnInit {

  products: Product[] = [];
  productsFiltered: Product[] = []
  sortOrder: string = ""

  constructor(private productService: Productservice,
      private cartService: Cartservice,
      private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      console.log('NGONINIT: ' + JSON.stringify(data));
      this.products = data;
      this.productsFiltered = data;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackBar.open("Added to cart", "Close", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        } );
      }
  });
  }

  applyFilter(event: Event): void {

    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.trim().toLowerCase();
    this.productsFiltered = this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    this.sortProducts(this.sortOrder);
  }

  sortProducts(sortValue: string): void {

    this.sortOrder = sortValue;
    if (sortValue === 'priceLowHigh') {
      this.productsFiltered.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'priceHighLow') {
      this.productsFiltered.sort((a, b) => b.price - a.price);
    }
  }
}
