import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { WeatherService } from '../weather.service'
@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
    weather: any
    constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: WeatherService
  ) { }

  ngOnInit() {
    
    this.getThisWeather(22102)
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
