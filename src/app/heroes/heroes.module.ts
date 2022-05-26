import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //las clases del módulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [  //lo que quiero que se vea desde afuera del módulo
        ListadoComponent
    ],
    imports: [  //aquí se especifican módulos
        CommonModule    //ofrece directivas como el *ngIf, *ngFor
    ]
})
export class HeroesModule {}