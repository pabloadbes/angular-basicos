import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre del componente, ese se importa en el index.html como script
  templateUrl: './app.component.html', // indicar el html de mi aplicación, en este caso aquí en la misma carpeta
  //aternativa: template
  /*template: '<span>Pablo</span>',
  template: `
    <h1>Hola de nuevo</h1>
  `,*/
  //styleUrls: ['./app.component.css'] - puedo prescindir de este
})
export class AppComponent {
}
