import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent} from "./games/games.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {StreamersComponent} from "./streamers/streamers.component";


const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'streamers', component: StreamersComponent },
  { path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
