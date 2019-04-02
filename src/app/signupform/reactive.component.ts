import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'selector',
    templateUrl: 'reactive.component.html'
})
export class ReactiveComponent implements OnInit {

    signupform: FormGroup  // it will represent complete form
    constructor() {

        this.signupform =new FormGroup({

            name12: new FormControl("Mukta",Validators.required),
            email:new FormControl("abc@gmail.com",
            Validators.compose([Validators.required,Validators.email])),
            address:new FormControl("pune"),
            telephone:new FormControl("12335")
        })
    }

    ngOnInit() { 

    }

}