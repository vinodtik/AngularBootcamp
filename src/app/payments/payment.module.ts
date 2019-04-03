import { NgModule } from '@angular/core';
import { PaymentsComponent } from './payments.component';
import { RouterModule } from '@angular/router';

var routes = [
    {
        path : '',
        component : PaymentsComponent
    }
]

@NgModule({
    imports: [ 
        RouterModule.forChild(routes)
    ],
    declarations: [ 
        PaymentsComponent
    ],
    exports:[
        PaymentsComponent
    ]
})
export class PaymentsModule { }