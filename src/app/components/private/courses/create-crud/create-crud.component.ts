import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Degree } from 'src/app/models/degree';
import { CourseService } from 'src/app/services/course.service';
import { DegreeService } from 'src/app/services/degree.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-crud',
  templateUrl: './create-crud.component.html',
  styleUrls: ['./create-crud.component.css']
})
export class CreateCrudComponent {

  course:Course;
  toppings = new FormControl('');
  degrees:Degree[]=[];
  constructor(private courseService:CourseService, private degreeService:DegreeService, private router:Router,
    private snack:MatSnackBar, private activateRoute:ActivatedRoute){
    this.course= new Course();
  }

  ngOnInit():void{
    this.init_data();
    
  }
  init_data(){

    this.activateRoute.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.courseService.getCourseId(id).subscribe(
            response => {
              this.course = response;
            }
          );
        }
      }
    );
    this.degreeService.getDegrees().subscribe(response=>{
      console.log(response);
      this.degrees= response;
      
    });


  }



  registro(registroForm: any) {
    if( this.course.id!=null){
      this.update(registroForm);
    }
    if (registroForm.valid) {
      this.courseService.save(this.course).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: `${response.mensaje}`,
          });
          this.router.navigate(['/admin/courseCrud']);

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
      this.courseService.update(this.course).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'Curso actualizado correctamente'
          });
          this.router.navigate(['/admin/courseCrud']);

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

