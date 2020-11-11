import { AddProduct } from './../../shared/actions/product-action';
import { filter, tap } from 'rxjs/operators';
import { ProductService } from './../get-products.service';
import { ProductState } from './../../shared/states/product-state';
import { Observable } from 'rxjs';
import { State, Store } from '@ngxs/store';
import { Product } from './../../shared/models/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;
  singleProduct: Product;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private store: Store) {

   }

  onClickAdd(product: Product) {
    this.addProduct(product);
  }

  addProduct(product: Product) {
      this.store.dispatch(new AddProduct(product));
  }

  ngOnInit(): void {
    // console.log('here')
    let id = this.route.snapshot.params.id;
    this.product$ = this.productService.getSingleProduct(id);
    this.productService.getSingleProduct(id).subscribe((product) => {
      // console.log(product);
      this.singleProduct = product;
    });
  }

}
