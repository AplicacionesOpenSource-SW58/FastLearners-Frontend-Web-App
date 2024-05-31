import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-toolbar',
  templateUrl: './custom-toolbar.component.html',
  styleUrls: ['./custom-toolbar.component.css']
})
export class CustomToolbarComponent {
  toolbar_options = [
    { path: '/home', title: 'Inicio'},
    { path: '/forum', title: 'Foro Estudiantil' },
    { path: '/repos', title: 'Repositorios' },
    { path: '/multimedia', title: 'Recursos Multimedia' },
    { path: '/subscriptions', title: 'Suscripciones' }
  ];
  account_button = { path: '/account', title: 'Mi Cuenta' };
}
