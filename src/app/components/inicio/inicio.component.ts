import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  // declara la variable
  textoi: string= "VER MÁS";

  cambiarTexto(){
    this.textoi="VER MENOS";
  }

}
