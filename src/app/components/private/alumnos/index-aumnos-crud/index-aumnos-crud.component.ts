import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index-aumnos-crud',
  templateUrl: './index-aumnos-crud.component.html',
  styleUrls: ['./index-aumnos-crud.component.css']
})
export class IndexAumnosCrudComponent {

  public users:User[]= [];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      response => {
        this.users = response;
        console.log(this.users);
        
      },
      err => console.log(err)
    )
  }

  delete(user: User): void {
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
        text: `Seguro que desea eliminar el Usuario! ${user.name}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.userService.deleteAlumno(user.id).subscribe((response) => {
            this.users = this.users.filter((cli) => cli !== user);
            swalWithBootstrapButtons.fire(
              'Usuario Eliminado!',
              `Usuario ${user.name} Eliminado con éxito.`,
              'success'
            );
          });
        }
      });
  }



}
