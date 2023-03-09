import { Component } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <img src="./assets/social-makers.png" [alt]="name" class="my-8 ml-8 hidden lg:inline" />
    <img src="./assets/social-makers-mobile.png" [alt]="name" class="my-3 ml-2 inline lg:hidden" />
  `
})
export class LogoComponent {
  name : string = "Social Makers";
}
