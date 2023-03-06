import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import * as moment from 'moment';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">

      <h1 class="text-3xl font-bold underline my-4">
        Hello {{ title }} <i class="fa-solid fa-bomb fa-5x"></i> It's {{ dayOfTheWeek }}
      </h1>

      <p class="light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde fugit fugiat corrupti </p>
      <br>
      <p class="primary-text-color">Lorem ipsum dolostrum libero tempore nemorepudiandae. Commodi, quos maiores. Soluta, rerum.</p>
      <br>
      <p class="semibold secondary-bg-color">Lorem ipsum doscipit dolorum architectoamus. Alias fugit non vitae eos ipsa?</p>
      <br>
      <strong>Lorem, ipsum dolor sit amet consectett harum aspernatur molestias deleniti</strong>

      <p>Is authenticated: {{ auth.isAuthenticated$ | async }}</p>
      <textarea name="token" id="token" cols="100" rows="10" class="bg-slate-200">{{ token$ | async }}</textarea>

      <button class="border-2 bg-slate-400 p-5 block" (click)="auth.loginWithRedirect()">Log in</button>
      <button class="border-2 bg-red-400 p-5 block" (click)="auth.logout()">Log out</button>

      <ul *ngIf="auth.user$ | async as user">
        <li>{{ user.name }}</li>
        <li>{{ user.email }}</li>
        <li>{{ user.picture }}</li>
      </ul>

      <router-outlet></router-outlet>

    </div>
  `
})
export class AppComponent implements OnInit{
  
  title         : string = 'Angular';
  dayOfTheWeek  : string = "";
  token$?       : Observable<string>;

  constructor(public auth : AuthService) {}

  ngOnInit() : void {
    
    this.dayOfTheWeek = moment().format("dddd");

    timer(5000).subscribe(() => this.token$ = this.auth.getAccessTokenSilently());

  }

}