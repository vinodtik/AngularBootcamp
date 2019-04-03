import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { helloworldComponent } from './helloworldComponent.component';
import { MenuComponent } from './menu.component';
import { ProductComponent } from './product.component';
// import { PaymentsModule } from './payments/payment.module';
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
import { TrackComponent } from './trackdatachanges/track.component';
import { HttpClientModule } from '@angular/common/http'
import { PhotosComponent } from './photos/photos.component';
import { PipesComponent } from './pipesdemo/pipe.component';
import { ReverseStringPipe } from './pipesdemo/custom.pipes';

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
    path:'payments',
    loadChildren:'./payments/payment.module#PaymentsModule'//adding path to payment module
  },
  {
    path: 'track changes',
    component : TrackComponent
  },
  {
    path: 'photos',
    component : PhotosComponent
  },
  {
    path: 'pipes',
    component : PipesComponent
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
    ParentDetComponent,
    TrackComponent,

    PhotosComponent,

    PipesComponent,
    ReverseStringPipe
  ],
  imports: [
    BrowserModule,
    // PaymentsModule,//included as lazy loading on requests
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
