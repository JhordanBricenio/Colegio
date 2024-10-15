import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { ModalService } from 'src/app/services/modal.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index-docentes',
  templateUrl: './index-docentes.component.html',
  styleUrls: ['./index-docentes.component.css']
})
export class IndexDocentesComponent {

  public users:User[] = [];
  docenteSeleccionado: User = new User();

  constructor(private serviceDocentes:UserService, private modalService:ModalService) { }

  ngOnInit(): void {
    this.serviceDocentes.getUsers().subscribe(
      users => this.users = users
    );

    this.modalService.notificarUpload.subscribe(docente => {
      this.users = this.users.map(docenteOriginal => {
        if(docente.id == docenteOriginal.id){
          docenteOriginal.photo = docente.photo;
        }
        return docenteOriginal;
      })
    } )
    
  }
  abrirModal(docente:User){
    this.docenteSeleccionado = docente;    
    this.modalService.abrirModal();    

  }
  delete(docente: User): void {
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
        text: `Seguro que desea eliminar el docente! ${docente.name}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.serviceDocentes.deleteAlumno(docente.id).subscribe((response) => {
            this.users = this.users.filter((cli) => cli !== docente);
            swalWithBootstrapButtons.fire(
              'Docente Eliminado!',
              `Docente ${docente.name} Eliminado con éxito.`,
              'success'
            );
          });
        }
      });
  }


}
