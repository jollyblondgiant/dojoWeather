import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { WeatherService } from '../weather.service'
@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
    weather: any
    constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: WeatherService
  ) { }

  ngOnInit() {
    
    this.getThisWeather(60610)
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
