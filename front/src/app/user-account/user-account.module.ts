import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { UserAccountRoutingModule } from './user-account-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from './../app.module';
import { ErrorInputDirective } from './../customdirectives.directive';
import { RecapComponent, PhonePipe, CodePipe } from './../user-account/recap/recap.component';
import { FormComponent } from './../user-account/form/form.component';
import { FooterComponent } from './../user-account/footer-form/footer-form.component';
import { HeaderFormComponent } from './header-form/header-form.component';

@NgModule({
  declarations: [
    FooterComponent,
    FormComponent,
    HeaderFormComponent,
    RecapComponent,
    LoginComponent,
    ErrorInputDirective,
    PhonePipe,
    CodePipe,
  ],
  imports: [
    // AppModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserAccountRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
})


export class UserAccountModule { }
