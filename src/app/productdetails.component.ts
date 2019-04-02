import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Component({
    selector: 'selector',
    template: `
        <h1>Showing product details</h1>
        Name : {{ product.prodName }}<br>
        Price : {{ product.prodPrice }}<br>
    `
})
export class ProductDetailsComponent implements OnInit {

    productId : number
    product:Product // variable to contain single product
    constructor(activatedroute:ActivatedRoute, productservice:ProductService) {

        activatedroute.params.subscribe(parameters=>{
            this.productId = parseInt(parameters["id"])
            console.log(this.productId)
            var products:Product[] = productservice.getProducts()
            for(let i =0; i < products.length; i++){
                if(products[i].prodId == this.productId){
                    this.product = products[i];
                    break;
                }
            }
        })
    }

    ngOnInit() { 

    }

}