import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-list',
  //templateUrl: './product-list.component.html',
  //templateUrl: './product-list-table.component.html',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //--new TypeScript version requirements - properties MUST by initialized in constructor
  products!: Product[];
  currentCategoryId!: number;
  currentCategoryName!: string;     //--13.17. Add NEW prop for store Category Name;

  //--10.1. Inject Angular Service for products data
  //--12.5.1. Inject current/activated route (..which loads the component ..used for access to route parameters)
  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //--12.5.2. Subscribe on the param map for the given route ..and
    //--12.5.3. Call method which get product data from Angular Service;
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    })
    //--10. Call method which get product data from Angular Service;
    //this.listProducts();
  }

  listProducts() {

    //--12.5.4. Check if "id parameter is available"
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    //--12.5.4
    /*
    if (hasCategoryId) {
      //--12.5.5. Get the string value of "id" parameter, convert string to a number using "+" symbol
      //this.currentCategoryId = +this.route.snapshot.paramMap.get('id');   //--ERR: TS2531: Object is possibly 'null'.
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;    //--FIX: add ! - "Non-null assertion operator";
      //--DEBUG:
      //console.log("--DEBUG: product-list.component.ts: currentCategoryId: "+ this.currentCategoryId);
    } else {
      // not category id available .. default to category id is 1
      this.currentCategoryId = 1;
    }
    */

    //--13.18. Check and Use NEW prop with Category Name;
    if (hasCategoryId) {
      //- get the "id" param string value. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
      //- get the "name" param string value;
      this.currentCategoryName = this.route.snapshot.paramMap.get('name')!;   //--FIX: add ! - "Non-null assertion operator";

    } else {
      //- if no category is provided - set default to category id of 1 and name of "Books"
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    //--12.5.6. Now get the products for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }

}
