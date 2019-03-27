import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li *ngFor="let menu of menuItems">
                <a href="#">{{ menu }}</a>
            </li>
        </ul>
    </div>
    `
})
export class MenuComponent implements OnInit {

    menuItems:string[] = ["Home","Products","About us", "Contact us","Login"]
    constructor() { }

    ngOnInit() { 

    }

}