import {Component, HostListener} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../../public/pages/home/home.component";
import {ForumComponent} from "../../public/pages/forum/forum.component";
import {ReposComponent} from "../../public/pages/repos/repos.component";
import {MultimediaComponent} from "../../public/pages/multimedia/multimedia.component";
import {SubscriptionsComponent} from "../../public/pages/subscriptions/subscriptions.component";
import {SignInComponent} from "../../public/pages/sign-in/sign-in.component";
import {UserAccountComponent} from "../../public/pages/user-account/user-account.component";
import {SignUpComponent} from "../../public/pages/sign-up/sign-up.component";

@Component({
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.css']
})

export class CustomToolbarComponent {

  routes: Array<any> = [
    { path: '/home', title: 'Inicio'},
    { path: '/forum', title: 'Foro Estudiantil'},
    { path: '/repos', title: 'Repositorio'},
    { path: '/multimedia', title: 'Recursos Multimedia'},
    { path: '/subscriptions', title: 'Planes de Suscripción'},

  ]
  routesAccount: Array<any> =[
    { path: '/signIn', title: 'Iniciar Sesión'},
    { path: '/account', title: 'Mi Cuenta' }
  ]

  isScreenSmall: boolean = window.innerWidth >= 1190;

  constructor() {
    this.updateScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateScreenSize();
  }

  private updateScreenSize() {
    this.isScreenSmall = window.innerWidth < 1190;
  }

}
