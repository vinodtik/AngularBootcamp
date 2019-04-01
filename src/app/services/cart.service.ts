import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable()
export class CartService {
    
    cartProducts: Product[] = []
    constructor() { }

    addProductToCart(product:Product){
        this.cartProducts.push(product);
    }

    getCartDetails():Product[]{
        return this.cartProducts;
    }

    removeProduct(i){
        this.cartProducts.splice(i,1);
        this.cartProducts.toString();
    }

}