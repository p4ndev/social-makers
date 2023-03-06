import { Component } from '@angular/core';

@Component({
  selector: 'app-cycomp',
  template: `<p>Timer: <span data-cy="timer">{{timer}}</span></p>`
})
export class CycompComponent {
  timer : number = 10;
}
