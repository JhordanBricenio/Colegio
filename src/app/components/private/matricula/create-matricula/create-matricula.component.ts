import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Licence } from 'src/app/models/licence';

@Component({
  selector: 'app-create-matricula',
  templateUrl: './create-matricula.component.html',
  styleUrls: ['./create-matricula.component.css']
})
export class CreateMatriculaComponent {

  public matricula:Licence;
  value = '';
  hideRequiredControl = new FormControl(false);

  constructor() {
    this.matricula= new Licence();
   }

  ngOnInit(): void {
    
  }
  registro(registroForm){
    console.log(this.matricula);
  }

}
