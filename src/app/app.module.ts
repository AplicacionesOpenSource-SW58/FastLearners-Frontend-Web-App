import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './public/pages/home/home.component';
import { SignInComponent } from './public/pages/sign-in/sign-in.component';
import { SignUpComponent } from './public/pages/sign-up/sign-up.component';
import { PaymentFormComponent } from './public/pages/payment-form/payment-form.component';
import { SubscriptionsComponent } from './public/pages/subscriptions/subscriptions.component';
import { ForumComponent } from './public/pages/forum/forum.component';
import { ReposComponent } from './public/pages/repos/repos.component';
import { MultimediaComponent } from './public/pages/multimedia/multimedia.component';
import { UserAccountComponent } from './public/pages/user-account/user-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    PaymentFormComponent,
    SubscriptionsComponent,
    ForumComponent,
    ReposComponent,
    MultimediaComponent,
    UserAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
