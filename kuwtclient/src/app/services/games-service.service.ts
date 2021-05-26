import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Game} from "../beans/game";

@Injectable({
  providedIn: 'root'
})
export class GamesServiceService {

  private gamesUrl: string;

  constructor(private http: HttpClient) {
    this.gamesUrl = 'http://localhost:8080/topGames';
  }

  public findAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gamesUrl);
  }

  public save(game: Game) {
    return this.http.post<Game>(this.gamesUrl, game);
  }
}
