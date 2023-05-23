import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Evento } from 'src/app/models/eventos';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index-events',
  templateUrl: './index-events.component.html',
  styleUrls: ['./index-events.component.css']
})
export class IndexEventsComponent {

  events: Evento[];

  constructor(private eventService: EventService, public date: DatePipe) { }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe(
      response => {
        console.log(response);
        
        this.events = response;

      }
    );


  }
  
  delete(evento: Evento): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Está seguro?',
        text: `Seguro que desea eliminar el Evento! ${evento.name}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.eventService.deleteEvento(evento.id).subscribe((response) => {
            this.events = this.events.filter((cli) => cli !== evento);
            swalWithBootstrapButtons.fire(
              'Evento Eliminado!',
              `Evento ${evento.name} Eliminado con éxito.`,
              'success'
            );
          });
        }
      });
  }

}
