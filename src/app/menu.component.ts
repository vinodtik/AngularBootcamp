import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/menu.service';
import { LoginService } from './services/login.service';

@Component({
    selector: 'app-menu',
    template: `
    <nav class="navbar navbar-inverse"> 
        <div class="container">
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li *ngFor="let menu of menuList">
                        <a routerLink="{{ menu | lowercase }}">{{ menu }}</a>
                    </li>
                    <li>
                        <a href="#">
                            {{ username }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `,
    providers:[
        MenuService
    ]
})
export class MenuComponent implements OnInit {
    
    menuList:string[] = []
    username : string;
    constructor(menu:MenuService, loginservice:LoginService) { 
        this.menuList = menu.getMenu();

        loginservice.usernameobservable.subscribe(res=>{
            this.username = "Welcome "+res;
        })
    }

    ngOnInit() { 

    }

}