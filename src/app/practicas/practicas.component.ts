
import { Component } from '@angular/core';


@Component({
  selector: 'app-practicas',
  templateUrl: './practicas.component.html',
})
export class PracticasComponent{

  Familia:string[]=['Priamo','Juana','Llaquira','Yery']

    familiarborrado='';
    cabeza:string='Priamo';

  borrarFamiliar(){
    this.familiarborrado=this.Familia.shift() || '';
  }

}
let numero:number=100;
