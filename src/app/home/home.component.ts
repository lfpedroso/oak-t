import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 3, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 4, rows: 3, color: '#DDBDF1'},
    {text: 'five', cols: 3, rows: 2, color: 'lightpink'},
    {text: 'six', cols: 1, rows: 2, color: 'lightgreen'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
