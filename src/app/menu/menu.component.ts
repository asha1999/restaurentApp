import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

export interface PeriodicElement {
  Veg: string;
  position: number;
  Cost: number;
  Nonveg: string;
  cost:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Veg: 'Veg Biriyani', Cost: 100,  Nonveg: 'Mutton Biriyani',cost:200},
  {position: 2, Veg: 'Mughlai Biriyani', Cost: 406, Nonveg: 'Chicken Biriyani',cost:200},
  {position: 3, Veg: 'veg dhum Biriyani', Cost: 141, Nonveg: 'mutton Kebab',cost:200},
  {position: 4, Veg: 'veg rolls', Cost: 122, Nonveg: 'chicken Kebab',cost:150},
  {position: 5, Veg: 'veg kurma', Cost: 101, Nonveg: 'chicken rolls',cost:90},
  {position: 6, Veg: 'veg paneer', Cost: 127, Nonveg: 'Chilli chicken',cost:190},
  {position: 7, Veg: 'spring rolls', Cost: 147, Nonveg: 'Nan chicken',cost:200},
  {position: 8, Veg: 'Onion rolls', Cost: 194, Nonveg: 'Onion Chicken',cost:290},
  {position: 9, Veg: 'malai kova', Cost: 184, Nonveg: 'lemon chicken',cost:210},
  {position: 10, Veg: 'tomato soup', Cost: 297, Nonveg: 'pepper chicken',cost:210},
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  
 //Veg = new FormControl(); 

  //veglist: string[] = ['Mughalai Biriyani', 'Mushroom Biriyani', 'Onionpakoda', 'Veg fried rice', 'Sausage Rice', 'Tomato Rice'];
  displayedColumns: string[] = ['position', 'Veg', 'Cost', 'Nonveg','cost'];
  dataSource = ELEMENT_DATA;
}


