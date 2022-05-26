import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent
    // elimino las clases agrupadas en el nuevo módulo
  ],
  imports: [
    BrowserModule,
    HeroesModule,  //importo el módulo recién creado
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent] //componente principal
})
export class AppModule { }
