import { Component } from '@angular/core';

@Component({
  selector: 'app-logotype',
  template: `
    <img src="./assets/social-makers.png" [alt]="name" class="my-8 ml-8 hidden lg:inline" />
    <img src="./assets/social-makers-mobile.png" [alt]="name" class="my-3 ml-2 inline lg:hidden" />
  `
})
export class LogoTypeComponent {
  name : string = "Social Makers";
}
