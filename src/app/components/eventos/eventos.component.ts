import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Evento } from 'src/app/models/eventos';
import { EventService } from 'src/app/services/event.service';



@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  event: Evento[];

  constructor(private eventService: EventService, public date: DatePipe) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      response => {
        this.event = response;

      }
    );


  }


}
