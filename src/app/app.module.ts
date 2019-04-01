import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { helloworldComponent } from './helloworldComponent.component';
import { MenuComponent } from './menu.component';
import { ProductComponent } from './product.component';
import { PaymentsModule } from './payments/payment.module';
import { LoginComponent } from './login/login.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CartDetailsComponent } from './cartdetails.component';
import { CounterComponent } from './counter.component';
import { CounterparentComponent } from './counterparent.component';
import { PageNotFoundComponent } from './pagenotfound.component';

var routes = [
  {
    path : '',
    component: helloworldComponent
  },
  {
    path : 'home',
    component: helloworldComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'products',
    component : ProductComponent
  },
  {
    path : 'about us',
    component : CounterparentComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    helloworldComponent,
    MenuComponent,
    ProductComponent,
    LoginComponent,
    AddtocartComponent,
    CartDetailsComponent,
    CounterComponent,
    CounterparentComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    PaymentsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
