import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private baseUrl = 'http://localhost:8080/api/products?size=100';
  private baseUrl = 'http://localhost:8080/api/products';

  //--10. Inject HttpClient (@Injectable) with Angular Dependencies Injection Framework
  constructor(private httpClient: HttpClient) { }

  //--12.6. Add parameter to getProductList() method
  getProductList(theCategoryId: number): Observable<Product[]> {

    //--12.7. Build URL based on category id, for example
    //  http://localhost:8080/api/products/search/findByCategoryId?id=2
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    //return this.httpClient.get<GetResponse>(this.baseUrl).pipe(   //--OLD: before course section #12
    return this.httpClient.get<GetResponse>(searchUrl).pipe(        //--NEW: before course section #12
      map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
