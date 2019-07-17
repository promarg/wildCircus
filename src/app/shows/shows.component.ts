import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  constructor(public api: ApiService) { }
 shows:any
  getShows(){
    this.api.getApiShows().subscribe((result)=>{
      console.log(result)
      this.shows = result
    })
  }

  ngOnInit() {
  this.getShows()
  }
}
