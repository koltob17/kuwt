import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title = 'KeeppingUpWithTwitch';
  tiles: Tile[] = [
    {text: 'Interesting statistic one', cols: 3, rows: 2, color: 'lightblue'},
    {text: 'Chart two', cols: 1, rows: 4, color: 'lightgreen'},
    {text: 'Sample news about site', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Twitch related news', cols: 2, rows: 2, color: '#DDBDF1'},
  ];
}
