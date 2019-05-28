import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-racers',
  templateUrl: './racers.component.html',
  styleUrls: ['./racers.component.css']
})
export class RacersComponent implements OnInit {
  
  racers:Object;

  constructor( private data: DataService) { }

  ngOnInit() {
    //This will fire as soon as the route HOME is encountered
    this.data.getRacers().subscribe(racerData => {
      this.racers = racerData['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings'];
      console.log(racerData)
    })
  }
}
