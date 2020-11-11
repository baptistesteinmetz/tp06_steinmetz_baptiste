import { UserStateModel } from './user-state-model';
// add actions : login => store username to display it
// adduser and store it
import { ShowUser, ConnectUser, AddUser } from './../actions/user-action';
import { NgxsModule, Action, Selector, State, StateContext } from '@ngxs/store';
import { User } from '../models/User';


@State<UserStateModel>({
  name: 'userContent',
  defaults: {
    user: new User(),
    // logged: [],
  }
})
export class UserState {

  @Selector()
  static getUser(state: UserStateModel) : User {
    return state.user;
    // return state.products.find(x => x.id === id);
  }

  // @Selector()
  // static getNbProducts(state: ProductStateModel): number {
  //   return state.products.length;
  // }


  @Action(AddUser)
  add(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: AddUser
  ) {
    const state = getState();
    // if(!state.products.find((product)=> product.id === payload.id)){
      // ProductState.getFullPriceProducts(state);
    patchState({
      user: payload
    });
    }

  @Action(ConnectUser)
  log(
    { getState, patchState }: StateContext<UserStateModel>,
    { payload }: ConnectUser,
  ) {
    const state = getState();
    // const index = state.products.indexOf(payload);
    // state.products.splice(index, 1);
      // patchState({
      //   // supprimer le payload dans users
      //   products: state.products
      // });
    }

@Action(ShowUser)
show(
  { getState, patchState }: StateContext<UserStateModel>,
  { payload }: ShowUser
) {
  // const state = getState();
  // patchState({
  //   product: payload,
  // });
}
}
