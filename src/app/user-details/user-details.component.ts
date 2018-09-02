import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public id;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.id = id;
    })
  
  }

  goPrev() {
    let prev_id = this.id - 1;
    this.router.navigate(['/users', prev_id]);
  }
  goNext() {
    let next_id = this.id + 1;
    this.router.navigate(['/users', next_id]);

  }
}
