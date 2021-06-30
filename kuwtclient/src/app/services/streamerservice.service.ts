/**
 * Author: Tobias Kollar
 * Projekt: KeepingUpWithTwitch
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Search} from "../beans/Search";

@Injectable({
  providedIn: 'root'
})
export class StreamerserviceService {

  private searchUrl: string;

  constructor(private http: HttpClient) {
    this.searchUrl = 'http://localhost:8080/searchChannels';
  }

  public findAll(): Observable<Search[]> {
    return this.http.get<Search[]>(this.searchUrl);
  }

  public findPerson(search: String): Observable<Search[]> {
    return this.http.get<Search[]>(this.searchUrl+"?query="+search);
  }
}
