import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private _http: HttpClient) {
    
  
  }
  getWeather(zip){
    console.log("HERE IT COME")
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${zip},us&appid=9c4ea6d46adce936cc13c285b9aaea03&units=imperial`)
    
  }
}
