import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FastLearners-WebApp';
  toolbar_options = [
    { path: '/home', title: 'Pagina Principal'},
    { path: '/forum', title: 'Foro Estudiantil' },
    { path: '/repos', title: 'Repositorios' },
    { path: '/multimedia', title: 'Portal de Material Multimedia' },
    { path: '/subscriptions', title: 'Suscripciones' }
  ]
  account_button = {path: '/account', title: 'Mi Cuenta'}
}
