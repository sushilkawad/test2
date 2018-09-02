import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RocketService } from '../../shared/services/rocket.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  val1 = "value1";
  msg = 'Please Login';
  //  @Output() public childEvent = new EventEmitter();
  // isLoggedIn;
  constructor(private rocketService:RocketService,private router: Router) {
    this.rocketService.rocket.subscribe((data)=>{
      console.log('in login rocketStr',data);
      if(data){
        // this.childEvent.emit(true);
        // this.isLoggedIn = true;
        this.router.navigate(['/welcome']);
      }else{
        this.msg = "Invalid User";
      }
    });
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    this.rocketService.authUser(f.value.username,f.value.password);
  }

  ngOnInit() {
  }  

}
