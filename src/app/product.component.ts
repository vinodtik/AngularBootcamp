import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { CartService } from './services/cart.service';

@Component({
    selector: 'app-products',
    templateUrl: "./product.component.html",
    styles: [`
        .panel:hover .panel-body{ background:#ccc; cursor:pointer; transition:0.5s all; }
    `],
    providers:[
        ProductService,
        CartService
    ]
})
export class ProductComponent implements OnInit {
    products:Product[]= [];
    constructor(productList:ProductService) {
        this.products = productList.getProducts();
    }

    ngOnInit() {

    }

    showDetails(p:Product){
        alert('Showing details of '+ p.prodName);
    }

    searchProducts(searchString : string){

        // alert('Your just searched for '+ searchString);

        var filteredProducts:string[] = [];

        for(let i=0; i<this.products.length; i++){
            if(this.products[i].prodName.toLowerCase().startsWith(searchString.toLowerCase())){
                filteredProducts.push(this.products[i].prodName);
            }
        }
        alert(filteredProducts);
    }
}