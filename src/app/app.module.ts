import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

import { NavBarModule } from './nav-bar/nav-bar.module';
//import { VideoModule } from './video-module/video.module';
import { AdminModule } from './admin-module/admin.module';
import { OpdrachtenModule } from './opdrachten/opdrachten.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthTokenInterceptor } from './shared/oauth-token-header.interceptor';
import { AntwoordenComponent } from './antwoorden/antwoorden.component';

const google_oauth_client_id: string = '540698685876-7am742o1p5cb684kquk8ptn1u8v9efdi.apps.googleusercontent.com';
// const googleLoginOptions: any = {
//   scope: 'https://www.googleapis.com/auth/youtube.readonly https://www.googleapis.com/auth/youtubepartner https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl'
// };
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    AntwoordenComponent
   ],
  imports: [
    BrowserModule,
    NavBarModule,
    SocialLoginModule,
    //VideoModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModule,
    OpdrachtenModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
