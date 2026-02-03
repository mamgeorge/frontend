import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({ providedIn: 'root', })
export class Productservice {

  private apiUrl = environment.apiUrl + '/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // console.log('Fetching products from API:', this.apiUrl);
    return this.http.get<Product[]>(this.apiUrl);
  }
}
