import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { PublicMenuComponent } from './components/stateful/public-menu/public-menu.component';
import { LogoComponent } from './components/stateless/logo.component';
import { AdminMenuComponent } from './components/stateful/admin-menu/admin-menu.component';
import { NotificationComponent } from './components/stateful/notification/notification.component';
import {
  NotificationErrorComponent, NotificationSuccessComponent, NotificationWarningComponent
} from './components/stateless/notification.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    PublicMenuComponent,
    AdminMenuComponent,
    NotificationComponent,
    NotificationSuccessComponent,
    NotificationErrorComponent,
    NotificationWarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-nvp7mxmeye1u6wcr.us.auth0.com',
      clientId: 'eZUrmJtHuya1acIXYpg8ORpGBzKYIRIB',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
