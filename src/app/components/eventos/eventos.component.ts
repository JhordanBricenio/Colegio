import { Component } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  event:Event[];

  constructor(private eventService:EventService) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      response=>{
        this.event=response;      
      }
    );
    
    
  }


}
