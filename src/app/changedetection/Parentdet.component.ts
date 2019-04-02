import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector',
    template: `<!--<app-childdet [personobj]="Person"></app-childdet>-->
    
    <app-childdet [cars1]="cars"></app-childdet>
    <button (click)="changeprop()">Change Property</button>

    <button (click)="changeref()">Change Reference</button>
    
    <button (click)="addcar()">Add New Car</button>
    <button (click)="removecar()">Remove car</button>
    
    `
})
export class ParentDetComponent implements OnInit {

    Person ={Id:10,Name:'Sachin'}

    cars:string[] =["Nano","Audi","BMW"]
    constructor() { }

    ngOnInit() { 

    }
    changeprop(){
        this.Person.Id=20 //mutating original object
    }

    changeref(){

        this.Person ={Id:30,Name:'Virat'} //changing reference
    }

    addcar(){
    //    this.cars =this.cars.concat("Honda")  //: It refers to new array
        this.cars.push("New car") //it mutates original array
        // console.log(this.cars);
    }

    removecar(){
        this.cars.pop();
        this.cars = JSON.parse(JSON.stringify(this.cars));
        console.log(this.cars);
    }
}