import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-docentes',
  templateUrl: './create-docentes.component.html',
  styleUrls: ['./create-docentes.component.css']
})
export class CreateDocentesComponent implements OnInit {
  value = '';

  emailFormControl = new FormControl('', [Validators.required, Validators.email,]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.required,]);

  matcher = new MyErrorStateMatcher();

  docente: User;
  constructor(private userService:UserService,private snack:MatSnackBar,
    private router:Router, private activatedRoute:ActivatedRoute) {
    this.docente = new User();
  }


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
              this.docente = response;
            }
          );
        }
      }
    );

  }
  registro(registroForm: any) {
    if( this.docente.id!=null){
      this.update(registroForm);
    }
    if (registroForm.valid) {
      this.userService.createAlumnosAll(this.docente).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: `${response.mensaje}`,
          });
          this.router.navigate(['/admin/docentes']);

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
      this.userService.updateAlumno(this.docente).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Docente actualizado correctamente'
          });
          this.router.navigate(['/admin/docentes']);

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

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}