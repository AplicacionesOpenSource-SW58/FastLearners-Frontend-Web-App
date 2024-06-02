import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.css']
})
export class CustomToolbarComponent {
  home_button = { path: '/home', title: 'Inicio'}
  forum_button = { path: '/forum', title: 'Foro Estudiantil'}
  repos_button = { path: '/repos', title: 'Repositorio'}
  multimedia_button = { path: '/multimedia', title: 'Recursos Multimedia'}
  subscriptions_button = { path: '/subscriptions', title: 'Planes de Suscripción'}
  signIn_button = { path: '/signIn', title: 'Iniciar Sesión'}
  account_button = { path: '/account', title: 'Mi Cuenta' };
}
