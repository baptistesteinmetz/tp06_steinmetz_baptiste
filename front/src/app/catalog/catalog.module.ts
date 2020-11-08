import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CommonModule } from '@angular/common';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';
import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { ProductService } from './../get-products.service';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    SearchBarComponent,
  ],
  imports: [
    // AppModule,
    FormsModule,
    CommonModule,
    CatalogRoutingModule,
    ShoppingCartModule,
  ],
  providers: [ProductService],
  bootstrap: []
})
export class CatalogModule { }
