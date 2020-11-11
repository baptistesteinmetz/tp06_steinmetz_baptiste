import { User } from './../../shared/models/User';
import { UserState } from './../../shared/states/user-state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ProductState } from '../../shared/states/product-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public nbProducts$: Observable<number>;
  public loggedUser:string = null;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.nbProducts$ = this.store.select(state => state.listProducts.products.length);
    this.store.select(UserState.getUser).subscribe(
      (data) => this.loggedUser = data.login
    );
  }

}
