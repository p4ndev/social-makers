import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { CycompComponent } from './components/stateless/cycomp/cycomp.component';

@NgModule({
  declarations: [
    AppComponent,
    CycompComponent
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
