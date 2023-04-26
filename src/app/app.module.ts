import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptorService } from './RequestInterceptorService';
import { AddressPipe } from './pipes/address.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserInfoComponent,
    AboutUsComponent,
    ContactComponent,
    ErrorPageComponent,
    AddressPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
