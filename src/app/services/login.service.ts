import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoginService {
    
    userName:string;

    usernamesubject:Subject<string> = new Subject<string>();
    usernameobservable = this.usernamesubject.asObservable();
    constructor() {
    }
    
    setUserName( loginName : string ){
        this.userName = loginName;
        this.usernamesubject.next(this.userName);
        // console.log(this.userName);
    }
    getUserName():string{
        return this.userName;
    }

}