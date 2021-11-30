import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';   //--13.9 Import NEW Class


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private baseUrl = 'http://localhost:8080/api/products?size=100';
  private baseUrl = 'http://localhost:8080/api/products';
  private categoryUrl = 'http://localhost:8080/api/product-category';   //--13.12. Add New endpoint URL

  //--10. Inject HttpClient (@Injectable) with Angular Dependencies Injection Framework
  constructor(private httpClient: HttpClient) { }

  //--12.6. Add parameter to getProductList() method
  getProductList(theCategoryId: number): Observable<Product[]> {

    //--12.7. Build URL based on category id, for example
    //  http://localhost:8080/api/products/search/findByCategoryId?id=2
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    //return this.httpClient.get<GetResponse>(this.baseUrl).pipe(     //--12
    //return this.httpClient.get<GetResponse>(searchUrl).pipe(        //--12
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(  //--13.10. Change Interface name from "GetResponse" to "GetResponseProducts"
      map(response => response._embedded.products)
    );
  }

  //--13.12. Get Category ids from REST-API Service
  getProductCategories(): Observable<ProductCategory[]> {
    //- call REST-API with URL
    //- return an observable: maps JSON data (to ProductCategory array) from Spring Data REST Service HTTP-request
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }

}

//--13.10. Change Interface name from "GetResponse" to "GetResponseProducts"
interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}

//--13.11. Create NEW Interface "GetResponseProductCategory"
//- unwraps data from Spring Data REST JSON "_embedded" block/entry
interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}
