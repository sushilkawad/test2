import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
@ViewChild('paraInfo') info:ElementRef;
userRegistrationForm:FormGroup;

  constructor(private api:ApiService) { 


  }

  ngOnInit() {
    console.log(this.info);
    this.userRegistrationForm = new FormGroup({
      userInfo: new FormControl('Ajay',[Validators.required, Validators.email]),
      pass: new FormControl('123456',[Validators.required,Validators.pattern('^[0-9]{1,}$')])
    })
  }

  log(e:NgForm){

    console.log(e.value);
    
    e.reset();
    // e.value.userInfo = 'asidgasiygd';
    e.setValue({
      userInfo:'asdhasidh',
      pass:'2135465484'
    });
    e.controls.userInfo.patchValue('asjdnasl13151');
    
  }
  rlog(){
    console.log(this.userRegistrationForm);
    this.userRegistrationForm.reset();
    this.userRegistrationForm.setValue({
      userInfo:'asdhaosu',
      pass:'asiudhsiua'
    });
    this.userRegistrationForm.controls.userInfo.patchValue('abc@gmail.com');
    this.api.postData();
  }

}
