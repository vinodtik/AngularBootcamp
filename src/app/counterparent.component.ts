import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counterparent',
    template: `
        <app-counter (update)="updateCount($event)"></app-counter>
        
    `
})
export class CounterparentComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

    updateCount(value:number){
        alert("value from child " + value);
    }

}