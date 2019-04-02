import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { GreetComponent } from '../greet/greet.component';

@Component({
    selector: 'app-viewchild',
    template: `
    
            <p>@Viewchild demo</p>
            <app-greet #greet1 [Wish]="message1" ></app-greet>
            <app-greet #greet2 [Day]="message2" ></app-greet>

            <!--<button (click)="callChildFunction()">Msg from child</button>-->

            <button (click)="callChildFunction()">View children demo</button>
    `
})
export class ViewChildComponent implements OnInit {

    message1 : string = "Welcome to Angular"
    message2 : string = "Day 4 sessions"

    constructor() { }
    @ViewChild('greet1') greetcomp : GreetComponent

    @ViewChildren(GreetComponent) comps : QueryList<GreetComponent>
    ngOnInit() { 

    }

    callChildFunction(){
        // alert(this.greetcomp.dataToParent());
        console.log(this.comps.toArray());
    }

}