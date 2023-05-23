import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-index-post',
  templateUrl: './index-post.component.html',
  styleUrls: ['./index-post.component.css']
})
export class IndexPostComponent {
  
  
  public posts:Blog[]= [];
  proyectoSeleccioando:Blog;

  constructor(private blogService:BlogService){}

  ngOnInit():void{
    this.blogService.getBlogs().subscribe(
      response=>{
        console.log(response);
        
        this.posts=response;
      }
    );

  }
}
