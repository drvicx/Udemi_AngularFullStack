import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {

  //--13.5. Define property for store Category ids
  productCategories!: ProductCategory[];

  //--13.6. Inject ProductService
  constructor(private productService: ProductService) { }

  //--13.8. Call listProductCategories() method from ProductService for retrieve Category ids data
  ngOnInit(): void {
    this.listProductCategories();
  }

  //--13.7. Implement listProductCategories() method from ProductService for retrieve Category ids data
  listProductCategories() {
    this.productService.getProductCategories().subscribe(
      data => {
        //--DEBUG output to browser console;
        //console.log('--DEBUG: Product Categories=' + JSON.stringify(data));
        //console.log("--DEBUG: product-category-menu.component.ts: data: "+ JSON.stringify(data));
        //-set retrieved data to local
        this.productCategories = data;
      }
    );
  }

}
