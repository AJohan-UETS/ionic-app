import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home/', icon: 'cloudy' },
    { title: 'Imagen', url: '/imagen', icon: 'albums' },
    { title: 'Video', url: '/video', icon: 'videocam' },
    { title: 'Registrarse', url: '/register', icon: 'heart' }
  ];
  public Cuenta = "Usted aun no se ha registrado";
  constructor() {}
}
