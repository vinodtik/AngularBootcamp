import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
        <p>Passing data from child to parent component</p>
        <button (click)="increment()" class="btn btn-primary">Increase Counter</button>
    `
})
export class CounterComponent implements OnInit {

    counter: number = 0;

    //create event emitter to pass counver vaiable to its immediate parent.
    @Output()
    update:EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() { 

    }

    increment(){
        this.counter++
        this.update.emit(this.counter);
        // console.log(this.counter);
    }

}