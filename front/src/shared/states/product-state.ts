import { Product } from './../../shared/models/products';
import { AddProduct, DelProduct, ShowProduct } from './../actions/product-action';
import { NgxsModule, Action, Selector, State, StateContext } from '@ngxs/store';
import { ProductStateModel } from './product-state-model';


@State<ProductStateModel>({
  name: 'listProducts',
  defaults: {
    products: [],
    product: null,
  }
})
export class ProductState {

  @Selector()
  static getProduct(id: number) {
    // return state.products.find(x => x.id === id);
  }

  @Selector()
  static getNbProducts(state: ProductStateModel): number {
    return state.products.length;
  }

  @Selector()
  static getFullPriceProducts(state: ProductStateModel): number {
    let price: number = 0;
    state.products.forEach(product => {
      price += product.price;
    });
    let rounding = price.toFixed(2);
    price = Number(rounding)
    return price;
  }

  @Action(AddProduct)
  add(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: AddProduct
  ) {
    const state = getState();
    // if(!state.products.find((product)=> product.id === payload.id)){
      // ProductState.getFullPriceProducts(state);
    patchState({
      // créer un nouveau tableau
      // l'opérateur ... permet de consituer une liste d'élement du tableau
      products: [...state.products, payload],
    });
    // }
  }

  @Action(DelProduct)
  del(
    { getState, patchState }: StateContext<ProductStateModel>,
    { payload }: DelProduct,
  ) {
    const state = getState();
    const index = state.products.indexOf(payload);
    state.products.splice(index, 1);
      patchState({
      //   // supprimer le payload dans users
      //   products: state.products
      });
    }

    @Action(ShowProduct)
    show(
      { getState, patchState }: StateContext<ProductStateModel>,
      { payload }: ShowProduct
    ) {
      const state = getState();
      patchState({
        product: payload,
      });
    }
}
