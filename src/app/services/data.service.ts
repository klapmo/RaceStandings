import { Injectable } from '@angular/core';

//Importing Angular HTTP module
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  racers_url: string = "https://ergast.com/api/f1/2019/5/driverStandings.json"

  getRacers() {
    return this.http.get(this.racers_url)
  }
}
