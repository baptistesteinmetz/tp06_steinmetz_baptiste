import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductState } from './../../shared/states/product-state';
import { NgxsModule } from '@ngxs/store';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './../app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    // NoopAnimationsModule,
    // BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    CommonModule,
    // HttpClientModule,
    // NgxsModule,
    // NgxsModule.forRoot([
    //   ProductState
    // ]),
    // RouterModule
    HomeRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class HomeModule { }
