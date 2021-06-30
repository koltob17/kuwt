/**
 * Author: Tobias Kollar
 * Projekt: KeepingUpWithTwitch
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Topstream} from "../beans/topstream";

@Injectable({
  providedIn: 'root'
})
export class TopstreamService {

  private streamUrl: string;
  private followUrl: string;

  constructor(private http: HttpClient) {
    this.streamUrl = 'http://localhost:8080/getActiveStreams';
    this.followUrl = 'http://localhost:8080/getFollowedStreams';
  }

  public findAll(): Observable<Topstream[]> {
    return this.http.get<Topstream[]>(this.streamUrl);
  }

  public save(game: Topstream) {
    return this.http.post<Topstream>(this.streamUrl, game);
  }

  public followed(id: String) {
    return this.http.get<Topstream[]>(this.followUrl+"?id="+id);
  }

}
