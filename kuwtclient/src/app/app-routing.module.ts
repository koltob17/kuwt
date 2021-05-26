import {InjectionToken, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, Routes} from '@angular/router';
import { GamesComponent} from "./games/games.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {StreamersComponent} from "./streamers/streamers.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'streamers', component: StreamersComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'login', component: LoginComponent}
];

const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

@NgModule({
  providers: [
    {
      provide: externalUrlProvider,
      useValue: (route: ActivatedRouteSnapshot) => {
        const externalUrl = route.paramMap.get('externalUrl');
        window.open(externalUrl, '_self');
      },
    },
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
