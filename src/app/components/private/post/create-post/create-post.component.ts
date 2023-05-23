import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { Tag } from 'src/app/models/tag';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  
  public Editor = ClassicEditor;


  public id;
  public blog: Blog = new Blog();
  toppings = new FormControl('');
  public tags: Tag[] = [];

  constructor(private blogService: BlogService,
    private snack: MatSnackBar, private router: Router,
    private authService: AuthserviceService,
    private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {

   this.init_data();
  }
  init_data(){
    this.activatedRoute.params.subscribe(
      params => {
        let id = params['id'];
        if (id) {
          this.blogService.getPorId(id).subscribe(
            response => {
              console.log(response);
              this.blog = response;
            }
          );
        }
      }
    );

    this.blogService.getTags().subscribe(
      response => {
        this.tags = response;
      }
    );
  }

  registro(registroForm: any) {
    if( this.blog.id!=null){
      this.update(registroForm);
    }
    if (registroForm.valid) {
      console.log(this.blog);
     // let username = this.authService.usuario.nombres + ' ' + this.authService.usuario.apellidos;
      //this.blog.author = username;
      let username= "jhordan"
      this.blog.author= username;
      this.blogService.savePost(this.blog).subscribe(
        response => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: 'Post creado con Éxito'
          });
          this.router.navigate(['/admin/post']);
        }
      );
    }
    else {
      this.snack.open('Los datos del formulario no son válidos', 'Cerrar', {
        duration: 3000
      });
    }
  }
  update(registroForm: any) {
    if (registroForm.valid) {
      this.blogService.updateBlog(this.blog).subscribe(
        response => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: 'Post actualizado con exito con Éxito'
          });
          this.router.navigate(['/admin/post']);
        }
      );
    }
    else {
      this.snack.open('Los datos del formulario no son válidos', 'Cerrar', {
        duration: 3000
      });
    }
  }
  
  mostrarNombre(etiqueta?: Tag): string | undefined {
    return etiqueta ? etiqueta.name : undefined;


  }

}
