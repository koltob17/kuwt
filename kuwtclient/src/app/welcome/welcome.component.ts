import {Component, OnInit} from '@angular/core';
import { TopstreamService } from "../services/topstream.service";
import {Topstream} from "../beans/topstream";
import { UserService} from "../services/user.service";
import {User} from "../beans/user";

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
export class WelcomeComponent implements OnInit{
  title = 'KeepingUpWithTwitch';
  topstreams: Topstream[];
  dataSource = null;

  followed: Topstream[];
  followSource = null;

  user: User[];
  userData = null;

  constructor(private topstreamService: TopstreamService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.topstreamService.findAll().subscribe( data =>{
      this.topstreams = data;
      console.log(this.topstreams);
      this.dataSource = this.topstreams;
    })

    this.userService.findAll().subscribe( data =>{
      this.user = data;
      console.log(this.user);
      this.userData = this.user;
    })

    setTimeout(() => {
      console.log(this.userData.data[0].id);
      this.topstreamService.followed(this.userData.data[0].id).subscribe( data =>{
        this.followed = data;
        console.log(this.followed);
        this.followSource = this.followed;
      })
    }, 1500)

  }

  streamClicked(stream: String): void {
    if(stream == '1'){
      window.location.href = 'https://www.twitch.tv/' + this.dataSource.data[0].user_login;
    }
    else if(stream == '2'){
      window.location.href = 'https://www.twitch.tv/' + this.dataSource.data[1].user_login;
    }
    else if(stream == '3'){
      window.location.href = 'https://www.twitch.tv/' + this.dataSource.data[2].user_login;
    }
    else if(stream == '4'){
      window.location.href = 'https://www.twitch.tv/' + this.dataSource.data[3].user_login;
    }
  }

  followedClicked(stream: String): void {
    if(stream == '1'){
      window.location.href = 'https://www.twitch.tv/' + this.followSource.data[0].user_login;
    }
    else if(stream == '2'){
      window.location.href = 'https://www.twitch.tv/' + this.followSource.data[1].user_login;
    }
    else if(stream == '3'){
      window.location.href = 'https://www.twitch.tv/' + this.followSource.data[2].user_login;
    }
    else if(stream == '4'){
      window.location.href = 'https://www.twitch.tv/' + this.followSource.data[3].user_login;
    }
  }
}
