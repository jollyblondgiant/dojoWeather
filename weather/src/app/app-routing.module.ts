import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component'
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { DallasComponent } from './dallas/dallas.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'



const routes: Routes = [
  { path: 'weather/:id', component: WeatherComponent },
  { path: 'seattle', component: SeattleComponent },
  { path: 'burbank', component: BurbankComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'washington', component: WashingtonComponent },
  { path: 'san-jose', component: SanJoseComponent },
  { path: 'dallas', component: DallasComponent },
  { path: '', pathMatch: 'full', redirectTo: '/chicago' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
