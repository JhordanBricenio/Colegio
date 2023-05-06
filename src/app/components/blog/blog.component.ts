import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  public blogs:Blog[]=[];

  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(
      response=>{
        console.log(response);
        this.blogs=response;
      },
      error=>{
        console.log(error);
      }
    );
    
    
  }

}
