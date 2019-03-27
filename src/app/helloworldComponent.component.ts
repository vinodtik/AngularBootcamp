import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello',
    template: `
        <h3>{{ sayHello }} </h3>
    `,
    styles : [`
        h3{ 
            background:blue;
            font-size:3rem;
            color: white;
        }    
    `]
})
export class helloworldComponent implements OnInit {

    sayHello:string = "Have a nice Day!";

    constructor() { }

    ngOnInit() { 

    }

}