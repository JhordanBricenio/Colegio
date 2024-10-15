import { Component } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/services/blog.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-index-post',
  templateUrl: './index-post.component.html',
  styleUrls: ['./index-post.component.css']
})
export class IndexPostComponent {
  
  
  public posts:Blog[]= [];
  postSeleccionado:Blog;

  constructor(private blogService:BlogService, private modalService:ModalService){}

  ngOnInit():void{
    this.blogService.getBlogs().subscribe(
      response=>{
        //console.log(response);
        
        this.posts=response;
      }
    );

    this.modalService.notificarUpload.subscribe(post => {
      this.posts = this.posts.map(postOriginal => {
        if(post.id == postOriginal.id){
          postOriginal.image = post.image;
        }
        return postOriginal;
      })
    })

  }
  abrirModal(post:Blog){
    this.postSeleccionado = post;    
    this.modalService.abrirModal();

  }
}
