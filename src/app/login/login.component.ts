import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName :string = 'admin';
  password :string = 'admin';
  constructor(private loginservice: LoginService) {
    this.userName = loginservice.getUserName();
  }

  changeUser(){
    this.loginservice.setUserName(this.userName);
  }

  ngOnInit() {
  }

}
