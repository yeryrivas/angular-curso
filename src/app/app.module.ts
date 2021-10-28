import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './Contador/contador.component';
import { HeroesModule } from './heroes/heroes.mudule';
import { PracticasComponent } from './practicas/practicas.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    PracticasComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
