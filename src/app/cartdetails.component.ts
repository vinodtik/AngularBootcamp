import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { CartService } from './services/cart.service';

@Component({
    selector: 'app-cartdetails',
    template: `
        <ul class="list-group" style="max-height:300px; overflow:auto">
            <li class="list-group-item list-group-item-light" *ngFor=" let item of cartProducts; let i = index">
                <img [src]="item.prodImg" class="img-rounded" style="height:60px; width:auto;" />
                {{ item.prodName }} x <span>1</span> = {{ item.prodPrice }}  <span class="btn btn-danger fa fa-trash" title="Remove" (click)="removeProduct(i)"></span>
            </li>
        </ul>
    `
})
export class CartDetailsComponent implements OnInit {

    cartProducts : Product[];

    constructor( private cartservice:CartService ) { 
        this.cartProducts = this.cartservice.getCartDetails();
    }

    ngOnInit() { 

    }

    removeProduct(item:number){
        this.cartservice.removeProduct(item);
    }

}