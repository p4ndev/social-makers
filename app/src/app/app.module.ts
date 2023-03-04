import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import 'moment/locale/pt-br';

import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './components/stateless/welcome/welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    AuthModule.forRoot({
      domain: "dev-nvp7mxmeye1u6wcr.us.auth0.com",
      clientId: "RRd7katSaFXimLrvKwiEdpBiS8XPbqLE",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })

  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
