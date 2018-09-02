import { Component,Input, Output, EventEmitter } from '@angular/core';
import { RocketService } from '../shared/services/rocket.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @Output() Rocket:EventEmitter<string> = new EventEmitter<string>();
  // @Input('name1') name1:string = "asd";

  title = 'app';
  // isLoggedIn:boolean = true;

  // constructor(){
  constructor(private rocketService:RocketService,private router: Router){
  this.rocketService.rocket.subscribe((data)=>{
    console.log('in app component constructor rocket subscribe',data);
  //   this.isLoggedIn = data;
  //   this.router.navigate(['/welcome']);
  });
}

ngOnInit() {
  console.log('in app component ngOnInit');
}

logout(){
  this.rocketService.logOut();
  this.router.navigate(['/']);
}


}