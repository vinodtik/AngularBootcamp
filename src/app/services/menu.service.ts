import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    menuItems:string[] = ["Home","Products","About us", "Contact us","Login", "Sign Up", "View Child", "Change Detection","Payments","Track Changes","Photos","Pipes"]

    constructor() { }

    getMenu(){
        return this.menuItems;
    }

}