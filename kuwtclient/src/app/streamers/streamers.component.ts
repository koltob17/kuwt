import { Component, OnInit } from '@angular/core';
import { StreamerserviceService } from "../services/streamerservice.service";
import {Search} from "../beans/search";

@Component({
  selector: 'app-streamers',
  templateUrl: './streamers.component.html',
  styleUrls: ['./streamers.component.css']
})
export class StreamersComponent implements OnInit {

  title="KeepingUpWithTwitch"
  dataSource = null;
  search: String = ''

  results: Search[]

  constructor(private streamerService: StreamerserviceService) { }

  ngOnInit(): void {

  }

  onStreamerInput(): void {
    this.streamerService.findPerson(this.search).subscribe(data =>{
      this.results = data;
      console.log(this.results);
      this.dataSource = this.results;})
  }
}
