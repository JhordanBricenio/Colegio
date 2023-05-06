import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course';
import { Degree } from 'src/app/models/degree';
import { CourseService } from 'src/app/services/course.service';
import { DegreeService } from 'src/app/services/degree.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  course:any;
  id:string;

  constructor(private route:ActivatedRoute, private degreeService:DegreeService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');
      this.degreeService.getDegree(this.id).subscribe(
        response=>{          
          this.course=response;
          console.log(this.course);        
        });
    });

  }

  

}
