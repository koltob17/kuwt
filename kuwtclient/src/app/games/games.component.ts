import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Game} from "../beans/game";
import {GamesServiceService} from "../services/games-service.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit  {
  displayedColumns: string[] = ['position', 'name', 'image'];
  dataSource = null;
  title = 'KeepingUpWithTwitch'

  games: Game[];

  constructor(private gameService: GamesServiceService) {
  }

  ngOnInit() {
    this.gameService.findAll().subscribe(data =>{
      this.games = data;
      console.log(this.games);
      this.dataSource = this.games;
    })

  }

  gameClicked(reference: String): void{
    window.location.href = 'https://www.twitch.tv/directory/game/' + reference.replace(' ','%20');
  }
}

