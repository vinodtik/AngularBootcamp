import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ProductDetailsComponent } from './productdetails.component';
import { ViewChildComponent } from './viewchild/viewchild.component';
import { SignupFormComponent } from './signupform/singup.component';
import { ReactiveComponent } from './signupform/reactive.component';
import { ChildDetComponent } from './changedetection/childdet.component';
import { ParentDetComponent } from './changedetection/Parentdet.component';

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
    component : ProductComponent,

    children : [
      {
        path  : 'productdetails/:id',
        component : ProductDetailsComponent
      }
    ]
  },
  {
    path : 'about us',
    component : CounterparentComponent
  },
  {
    path: 'view child',
    component : ViewChildComponent
  },
  {
    path: 'sign up',
    // component : SignupFormComponent
    component : ReactiveComponent
  },
  {
    path: 'change detection',
    component : ParentDetComponent
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
    PageNotFoundComponent,
    ProductDetailsComponent,
    ViewChildComponent,
    SignupFormComponent,
    ReactiveComponent,
    
    // change detection
    ChildDetComponent,
    ParentDetComponent
  ],
  imports: [
    BrowserModule,
    PaymentsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
