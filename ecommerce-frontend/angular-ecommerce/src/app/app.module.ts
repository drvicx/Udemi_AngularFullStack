import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from "./services/product.service";
import { RouterModule, Routes } from "@angular/router";
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';


//--ROUTING CONFIGURATION
//--12.1. Define routs
const routes: Routes = [
  //{ path: 'category/:id', component: ProductListComponent },      //--"first match wins" conception;
  { path: 'category/:id/:name', component: ProductListComponent },  //--13.15. Added NEW link-parameter - "name";
  { path: 'category', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },

  { path: '', redirectTo: '/products', pathMatch: 'full' },         //--redirect if URL in link is empty;
  { path: '**', redirectTo: '/products', pathMatch: 'full' }        //--default-route for all other URLs witch not matched;
];

//--MODULES CONFIGURATION
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent
  ],
  imports: [
    //--12.2. Configure Router based on our routes
    RouterModule.forRoot(routes),
    //--other imports
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
