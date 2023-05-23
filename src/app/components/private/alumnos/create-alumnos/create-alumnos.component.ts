import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-alumnos',
  templateUrl: './create-alumnos.component.html',
  styleUrls: ['./create-alumnos.component.css']
})
export class CreateAlumnosComponent {

  public alumno: User= new User();
  public id;

  constructor(private userService:UserService,private snack:MatSnackBar,
     private router:Router, private activatedRoute:ActivatedRoute) { }



  ngOnInit(): void {
   
    this.init_data();
    
  }
  init_data(){
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.userService.getAlumnoById(id).subscribe(
            response => {
              this.alumno = response;
            }
          );
        }
      }
    );

  }
  registro(registroForm: any) {
    if( this.alumno.id!=null){
      this.update(registroForm);
    }
    if (registroForm.valid) {
      this.userService.createAlumnosAll(this.alumno).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: `${response.mensaje}`,
          });
          this.router.navigate(['/admin/alumnos']);

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
      this.userService.updateAlumno(this.alumno).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Alumno actualizado correctamente'
          });
          this.router.navigate(['/admin/alumnos']);

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
