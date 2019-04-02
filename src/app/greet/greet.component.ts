import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent{ 
  
  message : string
  user : string
  //to be set from parent
  @Input()
  Wish : string
  @Input()
  Day : string
  constructor() {
    this.message = "Good Afternoon "
    this.user = "Sachin"
   }

  ngOnInit() {
  }

  dataToParent(){
    return "Hi from child";
  }

}
