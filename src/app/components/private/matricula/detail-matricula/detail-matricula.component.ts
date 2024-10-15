import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Licence } from 'src/app/models/licence';
import { LicenseService } from 'src/app/services/license.service';

@Component({
  selector: 'app-detail-matricula',
  templateUrl: './detail-matricula.component.html',
  styleUrls: ['./detail-matricula.component.css']
})
export class DetailMatriculaComponent {

  public license: Licence= new Licence();

  constructor(private licenseService:LicenseService,private snack:MatSnackBar,
    private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.init_data();
  }

  init_data(){
    this.activatedRoute.params.subscribe(
      params => {
        let dni = params['dni'];
        if (dni) {
          this.licenseService.getLicenseByDniUser(dni).subscribe(
            response => {
              this.license = response;
              console.log(response);
              
            }
          );
        }
      }
    );

  }

}
