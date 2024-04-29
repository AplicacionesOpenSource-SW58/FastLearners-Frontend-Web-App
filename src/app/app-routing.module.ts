import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from "./public/pages/sign-in/sign-in.component";
import { ReposComponent } from "./public/pages/repos/repos.component";
import { ForumComponent } from "./public/pages/forum/forum.component";
import { MultimediaComponent } from "./public/pages/multimedia/multimedia.component";

const routes: Routes = [
  { path: 'home', component: SignInComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'forum', component: ForumComponent },
  { path: 'repos', component: ReposComponent },
  { path: 'multimedia', component: MultimediaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
