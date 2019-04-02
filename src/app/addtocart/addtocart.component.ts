import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  @Input()
  selectedProduct : Product
  constructor(private cartservice : CartService) {
    
  }
  addtoCart(){  
    this.cartservice.addProductToCart(this.selectedProduct);
  }

  
  ngOnInit() {
  }

}
