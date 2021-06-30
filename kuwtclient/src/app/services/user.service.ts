/**
 * Author: Tobias Kollar
 * Projekt: KeepingUpWithTwitch
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {User} from "../beans/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/getUserInformation';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl);
  }

  public findUser(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }
}
