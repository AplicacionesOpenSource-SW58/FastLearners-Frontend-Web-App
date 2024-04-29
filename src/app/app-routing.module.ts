import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "./public/pages/sign-in/sign-in.component";
import { ReposComponent } from "./public/pages/repos/repos.component";
import { ForumComponent } from "./public/pages/forum/forum.component";
import { MultimediaComponent } from "./public/pages/multimedia/multimedia.component";
import {SubscriptionsComponent} from "./public/pages/subscriptions/subscriptions.component";
import {UserAccountComponent} from "./public/pages/user-account/user-account.component";

const routes: Routes = [
  { path: 'home', component: SignInComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'forum', component: ForumComponent },
  { path: 'repos', component: ReposComponent },
  { path: 'multimedia', component: MultimediaComponent },
  { path: 'subscriptions', component: SubscriptionsComponent },
  { path: 'account', component: UserAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
