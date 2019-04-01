import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaymentsComponent } from './payments.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ 
        PaymentsComponent
    ],
    exports:[
        PaymentsComponent
    ]
})
export class PaymentsModule { }