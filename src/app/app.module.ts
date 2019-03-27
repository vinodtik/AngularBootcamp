import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { helloworldComponent } from './helloworldComponent.component';
import { MenuComponent } from './menu.component';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    helloworldComponent,
    MenuComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
