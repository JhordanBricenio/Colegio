import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-index',
  templateUrl: './indexAlumnos.component.html',
  styleUrls: ['./indexAlumnos.component.css']
})
export class IndexComponent {

  id:string;
  course:any;

  constructor(private route:ActivatedRoute, private courseService:CourseService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      this.id=params.get('id');
      this.courseService.getCourseId(this.id).subscribe(
        response=>{          
          this.course=response;
          console.log(this.course);
          
        });
    });

    

  }

}
