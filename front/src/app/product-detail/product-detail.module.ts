import { RouterModule } from '@angular/router';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { AppModule } from './../app.module';
import { ProductDetailComponent } from './product-detail.component';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    ProductDetailComponent,
  ],
  imports: [
    // NgxsModule,
    // NgxsModule.forRoot([
    //   ProductState
    // ]),
    // RouterModule.forRoot(appRoutes),
    // AppModule
    RouterModule,
    ProductDetailRoutingModule,
  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class ProductDetailModule { }
