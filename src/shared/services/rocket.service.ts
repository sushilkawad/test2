import { EventEmitter, Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class RocketService {
    rocket: EventEmitter<boolean> = new EventEmitter<boolean>();
    // rocketStr: EventEmitter<string> = new EventEmitter<string>();
    username = 'asd';
    password = 'asd';
    isLoggedIn: boolean = true; // Make it false 
    // msg: string = '';
    constructor(private router: Router) {
        if(!this.isLoggedIn){
            this.router.navigate(['/']);
        }
        console.log("in service constructor");
        // this.rocket.emit(this.isLoggedIn1);
    }

    authUser(username, password) {
        console.log('in service function');
        if (username == this.username && password == this.password) {
            this.rocket.emit(true);
            this.isLoggedIn = true;
        }else{
            this.rocket.emit(false);
        }
    }

    logOut(){
        this.isLoggedIn = false;
    }

    getAllUsers(){
        return [
            {
           id:1, name:"Sushil",mobile:8976,email:"sushilkawad@gmail.com"
        },
            {
           id:2, name:"Mangesh",mobile:5555,email:"mangesh@gmail.com"
        },
            {
           id:3, name:"Karthik",mobile:5444,email:"karthik@gmail.com"
        },
    ];
    }

    getUser(id){

    }
}
