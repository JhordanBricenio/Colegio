import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { DegreeService } from 'src/app/services/degree.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
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
