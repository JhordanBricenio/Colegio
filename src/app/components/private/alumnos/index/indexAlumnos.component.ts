import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Asistencia } from 'src/app/models/asistencia';
import { Course } from 'src/app/models/course';
import { User } from 'src/app/models/user';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { CourseService } from 'src/app/services/course.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './indexAlumnos.component.html',
  styleUrls: ['./indexAlumnos.component.css'],
})
export class IndexComponent {
  id: string;
  asistencia: Asistencia;
  course: Course = new Course();
  user: User = new User();
  asistencias: Asistencia[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private snack: MatSnackBar,
    private router: Router,
    private asistenciaService: AsistenciaService
  ) {
    this.asistencia = new Asistencia();
    this.asistencias= [];
    
  }

  ngOnInit(): void {
    this.course.users.forEach((alumno) => {
      alumno.asistencias.forEach((asistencia) => {
        asistencia.presente = 0;
      });
    });
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.courseService.getCourseId(this.id).subscribe((response) => {
        this.course = response;
        console.log(this.course);
      });
    });
  }
  registro(registroForm: NgForm) {
    if (registroForm.valid) {
    
      const asistencias: Asistencia[] = [];

      // Recorrer la lista de alumnos y crear objetos de Asistencia
      for (const alumno of this.course.users) {
        const asistencia: Asistencia = {
          id: null, // El ID se asignará en el backend
          fecha: new Date(),
          presente: null, // Inicialmente establecido en null
       //   ausente: null,
         // justificado: null,
         // tardanza: null,
          user: alumno
        };
      
        // Verificar si el alumno tiene asistencias registradas
        if (alumno.asistencias && alumno.asistencias.length > 0) {
          // Asignar el valor del radio button presente por defecto
         asistencia.presente = alumno.asistencias[0].presente;
        //  asistencia.presente = alumno.asistencias[alumno.asistencias.length - 1].presente;
        }
      
        asistencias.push(asistencia);
      }
      

      console.log(asistencias);
    } else {
      this.snack.open('Los datos del formulario no son válidos', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}
