import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  // declara la variable
  textoi: string= "VER MÁS";
  textof: string ="VER MENOS";

  cambiarTexto(){
    this.textoi="VER MENOS";
    this.textof="VER MÁS";
    console.log("ejecucuion en el ngDocheck cambiando el texto");
  }

}
