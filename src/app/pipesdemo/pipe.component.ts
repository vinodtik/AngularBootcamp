import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pipes',
    template: `
        reverse : {{ product | reverse }}<br>
        Name : {{ product | uppercase }}<br>
        Name : {{ product | lowercase }}<br>
        Price : {{ price | currency :'INR' }}<br>
        Price : {{ price | currency :'EUR' }}<br>
        Date : {{ launch_date | date }}<br>
        Date : {{ launch_date | date:'shot' }}<br>
        Date : {{ launch_date | date:'medium' }}<br>
    `
})
export class PipesComponent implements OnInit {

    product = "Samsung"
    price = 500
    launch_date = Date()
    constructor() { }

    ngOnInit() { 

    }

}