import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { CartService } from './services/cart.service';

@Component({
    selector: 'app-cartdetails',
    template: `
        <ul class="list-group" style="max-height:300px; overflow:auto">
            <li class="list-group-item" *ngFor=" let item of cartProducts ">
                <img [src]="item.prodImg" class="img-rounded" style="height:60px; width:auto;" />
                {{ item.prodName }}
            </li>
        </ul>
    `
})
export class CartDetailsComponent implements OnInit {

    cartProducts : Product[];

    constructor( cartservice:CartService ) { 
        this.cartProducts = cartservice.getCartDetails();
    }

    ngOnInit() { 

    }

}