import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { WeatherService } from '../weather.service'
@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
    weather: any
    constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _http: WeatherService
  ) { }

  ngOnInit() {
    
    this.getThisWeather(95112)
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
