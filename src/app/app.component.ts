import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurentApp';
  constructor(private router:Router){}
  onSelect(admin){
    this.router.navigate(['/users']);
  }
  onSelect1(users){
    this.router.navigate(['/restaurent']);
  }
  onSelect2(menu){
    this.router.navigate(['/menu']);
  }
  onSelect3(restaurents){
    this.router.navigate(['/restaurent']);
  }
  
  admin=[
    {name:"Admin"}
  ]
  users=[{name:"User"},
  ]
  restaurent=[{name:"restaurent"}]
  menu=[{name:"menu"}]

}
