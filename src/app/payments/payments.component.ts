import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-payments',
    template: `
        <h2>Payments module loaded</h2>
        <p class="text-right">
            <button class="btn btn-success btn-lg">Pay Here</button>
        </p>
    `
})
export class PaymentsComponent implements OnInit {

    constructor() { }

    ngOnInit() { 

    }

}