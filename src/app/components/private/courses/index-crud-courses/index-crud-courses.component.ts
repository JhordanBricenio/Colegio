import { Component } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-index-crud-courses',
  templateUrl: './index-crud-courses.component.html',
  styleUrls: ['./index-crud-courses.component.css']
})
export class IndexCrudCoursesComponent {

  public courses: Course[]=[]

  constructor(private courseService:CourseService){}

  ngOnInit():void{
    this.courseService.getCourses().subscribe(response=>{
      console.log(response);
      this.courses=response;
      
    });

  }
  

}
