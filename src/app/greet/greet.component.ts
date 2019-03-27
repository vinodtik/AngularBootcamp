import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent{

  message : string
  user : string
  constructor() {
    this.message = "Good Afternoon "
    this.user = "Sachin"
   }

  ngOnInit() {
  }

}
