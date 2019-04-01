import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable()
export class CartService {
    
    cartProducts: Product[] = []
    constructor() { }

    addProductToCart(product:Product){
        this.cartProducts.push(product);
        console.log(this.cartProducts);
    }

    getCartDetails():Product[]{
        return this.cartProducts;
    }

}