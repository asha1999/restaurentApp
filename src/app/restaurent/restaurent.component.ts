import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  Restaurent: string;
  position: number;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Restaurent: 'kalinga Family restaurent'},
  {position: 2, Restaurent: 'Mughlai restaurent'},
  {position: 3, Restaurent: 'Smokey Beach'},
  {position: 4, Restaurent: 'kakatiya Restaurent'},
  {position: 5, Restaurent: 'Indian sand'},
  {position: 6, Restaurent: 'Korean Restaurent'},
  {position: 7, Restaurent: 'Chinese Foods' },
  {position: 8, Restaurent: 'American Bytes'},
  {position: 9, Restaurent: 'malai Restaurent' },
  {position: 10, Restaurent: 'Priya Restaurent'},
];

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.css']
})
export class RestaurentComponent{
  displayedColumns: string[] = ['position', 'Restaurent'];
  dataSource = ELEMENT_DATA;
  
}
