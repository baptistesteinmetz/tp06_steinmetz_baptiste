import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ProductState } from '../../shared/states/product-state';
import { NgxsModule } from '@ngxs/store';
import { AppModule } from '../app.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    // AppModule,
    CommonModule,
    // NgxsModule,
    // NgxsModule.forRoot([
    //   ProductState
    // ]),
    ShoppingCartRoutingModule
  ],
  providers: [],
  exports: [ShoppingCartComponent],
  // bootstrap: [AppComponent]
})
export class ShoppingCartModule { }
