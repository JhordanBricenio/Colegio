import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Evento } from 'src/app/models/eventos';
import { EventService } from 'src/app/services/event.service';
import Swal from 'sweetalert2';

interface Estado{
  value:string;
  viewValue:string;

}

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  value = '';
  public Editor = ClassicEditor;

  estados: Estado[] = [
    { value: 'Activo', viewValue: 'Activo' },
    { value: 'Finalizado', viewValue: 'Finalizado' },
    { value: 'Cancelado', viewValue: 'Cancelado' },
  ];

  evento:Evento;

  constructor(private eventService:EventService, private snack:MatSnackBar, private router:Router,
    private activateRoute:ActivatedRoute){
    this.evento= new Evento();

  }

  ngOnInit():void{

    this.init_data();
  }
  init_data(){
    this.activateRoute.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.eventService.getEventById(id).subscribe(
            response => {
              this.evento = response;
            }
          );
        }
      }
    );

  }

  registro(registroForm: any) {
    if( this.evento.id!=null){
      this.update(registroForm);
    }
    if (registroForm.valid) {
      this.eventService.saveEvent(this.evento).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: `${response.mensaje}`,
          });
          this.router.navigate(['/admin/event']);
        }
      );
    }
    else {
      this.snack.open('Los datos del formulario no son válidos', 'Cerrar', {
        duration: 3000
      });
    }

  }
  update(registroForm: any){
    if (registroForm.valid) {
      this.eventService.updateEvento(this.evento).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Evento actualizado correctamente'
          });
          this.router.navigate(['/admin/event']);

        }
      );
    }
    else {
      this.snack.open('Los datos del formulario no son validos', 'Cerrar', {
        duration: 3000
      });
    }

  }

}
