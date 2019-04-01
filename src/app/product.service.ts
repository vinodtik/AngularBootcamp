import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable(
    // {
    //     providedIn:'root'
    // }
)
export class ProductService {
    products: Product[] = [];
    constructor() { 

        this.products.push(new Product(1, "OnePlus 6T", "./assets/product-images/1.jpg", 37999, "Mobile"));
        this.products.push(new Product(2, "Moto G5 Plus", "./assets/product-images/2.jpg", 13999, "Mobile"));
        this.products.push(new Product(3, "Nokia 6", "./assets/product-images/3.jpg", 14999, "Mobile"));
        this.products.push(new Product(4, "Samsung Galaxy Note 8", "./assets/product-images/4.jpg", 67900, "Mobile"));
        this.products.push(new Product(5, "Apple Iphone 8", "./assets/product-images/5.jpg", 64000, "Mobile"));
        this.products.push(new Product(6, "Dell Laptop", "./assets/product-images/6.jpg", 52000, "Laptop"));
        this.products.push(new Product(7, "Canon DSLR", "./assets/product-images/7.jpg", 65000, "Camera"));
        this.products.push(new Product(8, "HP Printer", "./assets/product-images/8.jpg", 4000, "Printer"));
        this.products.push(new Product(9, "Apple iPad", "./assets/product-images/9.jpg", 24900, "Tab"));
    }

    getProducts(){

        return this.products;
    }

}