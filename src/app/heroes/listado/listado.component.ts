import { Component } from '@angular/core';
//import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
//implementa OnInit - ciclo de vida
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string = '';
  
  borrarHeroe():void {
    this.heroeBorrado = this.heroes.pop() || '';
  } 

//export class ListadoComponent implements OnInit {
    //ng dispara estos de forma automática el constructor y el ciclo de vida
  /*constructor() {
    console.log('Constructor');
   }*/
   //inicializar cosas, petición servicios
  /*ngOnInit(): void {
    console.log('ngOnInit');
  }*/

}
