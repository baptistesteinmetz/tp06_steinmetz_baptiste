import { Product } from '../models/products';

export class AddProduct {
  static readonly type = '[Product] Add';
  constructor(public payload: Product) {
  }
}
export class DelProduct {
  static readonly type = '[Product] Del';
  constructor(public payload: Product) {}
}
export class ShowProduct {
  static readonly type = '[Product] Show';
  constructor(public payload: Product) {}
}
