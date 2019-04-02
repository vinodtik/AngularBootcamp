import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable()
export class CartService {
    
    cartProducts: Product[] = []
    constructor() { }

    addProductToCart(product:Product){
        if(this.cartProducts.includes(product)){
            alert('containes');
        }
        else{
            this.cartProducts.push(product);
        }
    }

    getCartDetails():Product[]{
        return this.cartProducts;
    }

    removeProduct(i){
        this.cartProducts.splice(i,1);
    }

}