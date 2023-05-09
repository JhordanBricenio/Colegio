import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-index-post',
  templateUrl: './index-post.component.html',
  styleUrls: ['./index-post.component.css']
})
export class IndexPostComponent {
  
  
  public posts:Blog[]= [];
  proyectoSeleccioando:Blog;
}
