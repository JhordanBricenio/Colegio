import { Component } from '@angular/core';
import { Licence } from 'src/app/models/licence';
import { LicenseService } from 'src/app/services/license.service';

@Component({
  selector: 'app-index-matricula',
  templateUrl: './index-matricula.component.html',
  styleUrls: ['./index-matricula.component.css']
})
export class IndexMatriculaComponent {

  public licenses:Licence[]=[];
  public desde;
  public hasta;

  constructor(private licenseService:LicenseService) { }

  ngOnInit(): void {
    this.licenseService.getLicenses().subscribe(
      response=>{
        this.licenses=response;
        console.log(this.licenses);
      })
  }

  filtrar(){

  }

  reset(){

  }

  imprimir(){

  }


}
