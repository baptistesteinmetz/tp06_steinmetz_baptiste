import { UserState } from './../../shared/states/user-state';
import { ProductState } from './../../shared/states/product-state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nbProducts$: Observable<number>;
  public logged: boolean = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.nbProducts$ = this.store.select(state => state.listProducts.products.length);
    this.store.select(UserState.getUser).subscribe(
      (data) => {
        if(JSON.stringify(data) !== JSON.stringify({})) {
          this.logged = true;
        }
      }
    );
  }

}
