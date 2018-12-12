import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { WeatherService } from '../weather.service'
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
    weather: any
    constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: WeatherService
  ) { }

  ngOnInit() {
    
    this.getThisWeather(98004)
  }
  getThisWeather(zip){
    let weather = this._http.getWeather(zip)
    weather.subscribe(data=>{
      console.log("!!!!!!!!!!!!!!!!!!", data)
      this.weather = data
    
      console.log("*********************", this.weather)
    })
    
    
    
  }

}
