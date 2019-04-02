import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signupform',
    templateUrl: 'signup.component.html',
    styles:[`
        .error{ color:#f00; font-size:12px; }
        input.ng-invalid{ border-color:#f00; }
    `]
})
export class SignupFormComponent implements OnInit {

    username:string = "admin"
    useremail:string = "someone@gmail.com"
    userphone : number = 1234567890
    useraddress : string = "Pune"
    constructor() { }

    ngOnInit() { 

    }

    postForm(){
        console.log(this.username)
        console.log(this.useremail)
        console.log(this.userphone)
        console.log(this.useraddress)
    }
}