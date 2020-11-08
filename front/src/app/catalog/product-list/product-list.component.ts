import { trigger, state, transition, animate, style } from '@angular/animations';
import { ProductState } from './../../../shared/states/product-state';
import { AddProduct } from './../../../shared/actions/product-action';
import { ProductService } from './../../get-products.service';
import { Product } from './../../../shared/models/products';
import { Observable, Subscription, timer } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('hide', [
      state('active', style({
        transform: 'translateX(80%)'
      })),
      state('inactive', style({
        transform: 'translateX(0%)'
      })),
      transition('active => inactive', animate('800ms ease-in')),
    ])
  ]
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]> = this.productService.getSearchResults();
  productSubscription: Subscription;

  public stateHide : string = 'inactive';
  loaded : boolean = true;
  constructor(private productService: ProductService, private store: Store) { }

  hideCart(event : any)
  {
    let switchState = this.stateHide;
    switchState == 'active' ? switchState = 'inactive' : switchState = 'active';
    let timer$ = timer(100);
    timer$.subscribe(t=> {
      this.stateHide = switchState;
    });
  }
  onClickAdd(product: Product) {
    this.addProduct(product);
  }

  addProduct(product: Product) {
      this.store.dispatch(new AddProduct(product));
  }
  ngOnInit(): void {
    // setTimeout(() => {
    //   // this.loaded = true;
    // }, 3000);
  }
}
