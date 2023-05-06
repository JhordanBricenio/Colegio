import { Component } from '@angular/core';
import { Workshop } from 'src/app/models/workshop';
import { WorkshopService } from 'src/app/services/workshop.service';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.css']
})
export class WorkshopComponent {

  public workshops:Workshop[]=[];

  constructor(private workshopService:WorkshopService) { }

  ngOnInit(): void {
    this.workshopService.getWorkshops().subscribe(
      response=>{
        this.workshops=response;
        console.log(this.workshops);
        
      },
      error=>{
        console.log(error);
      }
    );
  }

}
