import { NgModule                       } from '@angular/core';
import { BrowserModule                  } from '@angular/platform-browser';
import { AppRoutingModule               } from './app-routing.module';
import { AuthModule                     } from '@auth0/auth0-angular';

import { MENU_CONFIG                    } from './services/menu.config';
import { AppComponent                   } from './app.component';

import { PublicMenuComponent            } from './components/stateful/public-menu/public-menu.component';
import { AdminMenuComponent             } from './components/stateful/admin-menu/admin-menu.component';
import { LogoComponent                  } from './components/stateless/logo.component';

import { NotificationBoxComponent       } from './components/stateful/notification-box/notification-box.component';

import {
  NotificationErrorComponent,
  NotificationSuccessComponent,
  NotificationWarningComponent          } from './components/stateless/notification.component';

@NgModule({
  declarations: [
    AppComponent,                   LogoComponent,                    PublicMenuComponent,
    AdminMenuComponent,             NotificationBoxComponent,         NotificationSuccessComponent,
    NotificationErrorComponent,     NotificationWarningComponent
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
  providers: [
    { provide: "MENU_CONFIG", useValue: MENU_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
