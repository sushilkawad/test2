import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';

@Injectable()
export class ApiService {
    headers = new Headers({'auth-verify':'1234'});
    constructor(private http:Http){

    }

postData(){
    let headers = new Headers({'content-type':'application/json'});
    this.http.post('https://www.mumbaipuneadventures.com/?custom_posts=destination_feature_events',{name:'heroku'}, {headers:this.headers}).subscribe((data)=>{
        console.log(data);

    })
}
}