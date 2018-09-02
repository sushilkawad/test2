import { Component, OnInit } from '@angular/core';
import { RocketService } from '../../shared/services/rocket.service';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users = [];
  cities:any;
  // toggleModal;

  constructor(private rocketService:RocketService,private router: Router, private http:HttpClient) { }

  ngOnInit() {
    this.users = this.rocketService.getAllUsers();
    this.http.get('https://ladoo-angular.herokuapp.com/cities').subscribe(
      (cities)=>
      this.cities = cities
    );
  }

  onSelect(id){
    this.router.navigate(['/users',id]);
  }

  onSelectCity(id){
    
  }

  addCityForm(c: NgForm) {
    console.log(c.value.addCity);
    this.http.post('https://ladoo-angular.herokuapp.com/city',{ city : c.value.addCity }).subscribe(
      ()=> this.http.get('https://ladoo-angular.herokuapp.com/cities').subscribe(
        (cities) => this.cities = cities
      )
    );
    c.reset();
    // this.toggleModal = "hidden"
    // this.rocketService.authUser(f.value.username,f.value.password);
  }

  deleteCity(id){
    if(confirm("Are you sure?")){
      this.http.delete('https://ladoo-angular.herokuapp.com/city/'+id).subscribe(
        ()=>{
           this.http.get('https://ladoo-angular.herokuapp.com/cities').subscribe(
            (cities) => this.cities = cities
           )
        }
      )
    }else{
      return false;
    }
  }
}
