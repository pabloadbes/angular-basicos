//defino una clase común y corriente
//el decorador la convierte en un componente de angular
import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: ` <!--//en este caso es todo el contenido de app.component.html-->
        <!--es muy común que este archivo sea más sencillo y renderice con el contenido definido en otro archivo-->
        <!--actualmente tenemos en pantalla una instancia del appcomponent-->
        <h1> {{ titulo }} </h1>
        <h3>La base es <strong> {{ base }} </strong></h3>
        <!--entre llaves {{ }} puedo incluir código js -->
        <!--eventos se indican (), le puedo poner a cualquier elemento por ej al span también-->
        <!-- () esto es propio de angular y luego puedo añadir código js-->
        <!--no puse el this porque todo hace referencia implicitamente a la clase-->
        <button (click)="incremento( base ); "> + {{ base }}</button>
        <span> {{ numero }} </span>
        <!--cuidado con el tipo-->
        <button (click)="incremento( -base );"> - {{ base }}</button>    
    `
})
export class ContadorComponent {
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;
    
    incremento( valor: number ) {
      this.numero += valor;
    }
  
}