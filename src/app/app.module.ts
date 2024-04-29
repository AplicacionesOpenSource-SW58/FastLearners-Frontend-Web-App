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
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatDialogActions} from "@angular/material/dialog";

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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatDialogActions,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
