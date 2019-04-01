import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-payments',
    template: `
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