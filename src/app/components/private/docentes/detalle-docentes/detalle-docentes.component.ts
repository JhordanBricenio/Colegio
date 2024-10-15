import { HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-docentes',
  templateUrl: './detalle-docentes.component.html',
  styleUrls: ['./detalle-docentes.component.css']
})
export class DetalleDocentesComponent {

  @Input()docente:User;
  public title:string = 'Detalle del Docente';
  public fotoSeleccionada:File;
  progreso:number = 0;

  constructor(public modalService:ModalService, private userService:UserService) { }

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
    if(this.fotoSeleccionada.type.indexOf('image') < 0){
      Swal.fire('Error', 'El archivo seleccionado no es una imagen', 'error');
      this.fotoSeleccionada = null;
    }

    }

  subirFoto(){
    if(!this.fotoSeleccionada){
      Swal.fire('Error', 'Debe seleccionar una foto', 'error');
    }else{
      this.userService.subirFoto(this.fotoSeleccionada, this.docente.id).subscribe(event => {
        if(event.type === HttpEventType.UploadProgress){
          this.progreso = Math.round((event.loaded/event.total)*100);
        }else if(event.type === HttpEventType.Response){
          let response:any = event.body;
          this.docente = response.user as User;
          this.modalService.notificarUpload.emit(this.docente);
          Swal.fire('La foto se ha subido completamente!', response.mensaje, 'success');
          this.fotoSeleccionada =  null;
        }
      });
    }
  }

}
