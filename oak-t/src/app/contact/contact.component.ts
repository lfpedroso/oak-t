import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Teste', cols: 4, rows: 3, color: 'lightblue'},
    {text: 'teste', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'teste', cols: 3, rows: 2, color: 'lightpink'},
    {text: 'teste', cols: 4, rows: 3, color: '#DDBDF1'},
    {text: 'teste', cols: 3, rows: 2, color: 'lightpink'},
    {text: 'teste', cols: 1, rows: 2, color: 'lightgreen'}

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
