import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    menuItems:string[] = ["Home","Products","About us", "Contact us","Login"]

    constructor() { }

    getMenu(){
        return this.menuItems;
    }

}