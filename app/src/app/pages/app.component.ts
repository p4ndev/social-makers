import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-notification-box />
    <main class="container mx-auto">
      <div class="grid grid-cols grid-cols-12">
        <div class="col-span-12 lg:col-span-3 bg-white bg-opacity-30">
          <div class="grid grid-cols-4 lg:grid-cols-none">
            <div class="col-span-1">
              <a routerLink="/">
                <app-logotype></app-logotype>
              </a>
            </div>
            <div class="col-span-2">
              <app-public-menu></app-public-menu>
              <app-admin-menu></app-admin-menu>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-9 p-5 stage bg-white">
          <router-outlet></router-outlet>
        </div>
      </div>
    </main>
  `
})
export class AppComponent{}