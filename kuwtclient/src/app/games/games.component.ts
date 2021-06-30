/**
 * Author: Tobias Kollar
 * Projekt: KeepingUpWithTwitch
 */
import {Component, OnInit} from '@angular/core';
import {Game} from "../beans/game";
import {GamesServiceService} from "../services/games-service.service";
import {User} from "../beans/user";
import {UserService} from "../services/user.service";

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

  user: User[];
  userData = null;

  constructor(private gameService: GamesServiceService, private userService: UserService) {
  }

  ngOnInit() {
    this.gameService.findAll().subscribe(data =>{
      this.games = data;
      console.log(this.games);
      this.dataSource = this.games;
    })

    this.userService.findAll().subscribe( data =>{
      this.user = data;
      console.log(this.user);
      this.userData = this.user;
    })

  }

  gameClicked(reference: String): void{
    window.location.href = 'https://www.twitch.tv/directory/game/' + reference.replace(' ','%20');
  }
}

