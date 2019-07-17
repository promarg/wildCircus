import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Artists } from '../model/artist';
import { Shows } from '../model/shows';


@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  artist: any =[]

  constructor(public api: ApiService) { }

  getArtist(){
    this.api.getApiArtist().subscribe((result)=>{
      console.log(result)
      this.artist = result
    })
  }

  ngOnInit() {
  this.getArtist()
  }

}
