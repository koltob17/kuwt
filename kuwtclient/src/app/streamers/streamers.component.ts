import { Component, OnInit } from '@angular/core';
import { StreamerserviceService } from "../services/streamerservice.service";
import {Search} from "../beans/search";
import {User} from "../beans/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.css']
})
export class StreamersComponent implements OnInit {

  title="KeepingUpWithTwitch"
  dataSource = null;
  search: String = '';

  results: Search[];

  user: User[];
  userData = null;

  constructor(private streamerService: StreamerserviceService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe( data =>{
      this.user = data;
      console.log(this.user);
      this.userData = this.user;
    })
  }

  onStreamerInput(): void {
    this.streamerService.findPerson(this.search).subscribe(data =>{
      this.results = data;
      console.log(this.results);
      this.dataSource = this.results;})
  }

  streamerClicked(reference: String): void{
    window.location.href = 'https://www.twitch.tv/' + reference;
  }
}
