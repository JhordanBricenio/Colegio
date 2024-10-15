import { HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Evento } from 'src/app/models/eventos';
import { EventService } from 'src/app/services/event.service';
import { ModalService } from 'src/app/services/modal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-event',
  templateUrl: './detalle-event.component.html',
  styleUrls: ['./detalle-event.component.css']
})
export class DetalleEventComponent {

  @Input()evento:Evento;
  public title:string = 'Detalle del Evento';
  public fotoSeleccionada:File;
  progreso:number = 0;

  constructor(public modalService:ModalService, private eventService:EventService) { }

  ngOnInit(): void {
    
    
  }

  cerrarModal(){
    this.modalService.cerrarModal();
    this.fotoSeleccionada = null;
    this.progreso = 0;
  }
  selecionarFoto(event){
    this.fotoSeleccionada = event.target.files[0];
    this.progreso = 0;
   // console.log(this.fotoSeleccionada);
    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      Swal.fire('Error', 'El archivo seleccionado no es una imagen', 'error');
      this.fotoSeleccionada = null;
    }

    }

  subirFoto(){
    if(!this.fotoSeleccionada){
      Swal.fire('Error', 'Debe seleccionar una foto', 'error');
    }else{
      this.eventService.subirFoto(this.fotoSeleccionada, this.evento.id).subscribe(event => {
        if(event.type === HttpEventType.UploadProgress){
          this.progreso = Math.round((event.loaded/event.total)*100);
        }else if(event.type === HttpEventType.Response){
          let response:any = event.body;
          this.evento = response.proyecto as Evento;
          this.modalService.notificarUpload.emit(this.evento);
          Swal.fire('La foto se ha subido completamente!', response.mensaje, 'success');
        }
      });
    }
  }

}
