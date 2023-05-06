import { Component } from '@angular/core';
import { Degree } from 'src/app/models/degree';
import { DegreeService } from 'src/app/services/degree.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.css']
})
export class DegreeComponent {
  public degrees:Degree[] = [];

  constructor(private degreeService:DegreeService) { }

  ngOnInit(): void {

    this.degreeService.getDegrees().subscribe(
      response=>{
        this.degrees = response;
      }
    );
    
    
  }

  

}
