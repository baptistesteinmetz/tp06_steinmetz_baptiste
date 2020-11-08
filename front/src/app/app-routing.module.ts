import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'account', loadChildren: () => import('./user-account/user-account.module').then(m => m.UserAccountModule) },
  { path: 'products', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule) },
  { path: 'products/:id', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule) },
  { path: 'cart', loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
