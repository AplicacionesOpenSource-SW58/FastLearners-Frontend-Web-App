import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FastLearners-WebApp';
  options = [
    { path: '/home', title: 'Pagina Principal'},
    { path: '/forum', title: 'Foro Estudiantil' },
    { path: '/repos', title: 'Repositorios' },
    { path: '/multimedia', title: 'Portal de Material Multimedia' }
  ]
}
