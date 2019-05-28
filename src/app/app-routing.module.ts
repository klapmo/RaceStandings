import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importing our created components
import {HomeComponent} from './home/home.component';
import {RacersComponent} from './racers/racers.component';

const routes: Routes = [
  { path: 'home',component:HomeComponent},
  { path: 'racers',component:RacersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
