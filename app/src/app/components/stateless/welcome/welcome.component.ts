import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import * as moment from 'moment';
import { interval, take, of, Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {
  
  token$? : Observable<string>;
  dayOfTheWeek : string = "";
  oneToFifth$? : Observable<number[]>;

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ){ }

  ngOnInit() : void {

    this.dayOfTheWeek = moment().format("dddd");

    let acc : number = 10;
    let test : Array<number> = [];

    interval(1000)
      .pipe(take(6))
        .subscribe(() => {
          test.push(acc);
          acc += 10;
        });

    this.oneToFifth$ = of(test);

    this.token$ = this.auth.getAccessTokenSilently();

  }
  
}
