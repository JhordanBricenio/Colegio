import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable, catchError, throwError } from 'rxjs';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public url;


  constructor(private _http: HttpClient) {
    this.url=GLOBAL.url;
  }

  getBlogs():Observable<Blog[]>{
    return this._http.get<Blog[]>(this.url+'blog');
  }
  savePost(blog){
    return this._http.post(this.url+'blog',blog);

  }
  getTags():Observable<any>{
    return this._http.get<any>(this.url+'tags');
  }
  getPorId(id):Observable<Blog>{
    return this._http.get<Blog>(this.url+'blog/'+id);
  }
  updateBlog(post:Blog):Observable<any>{
    return this._http.put(this.url+'blog/'+post.id,post);
  }
  subirFoto(foto: File, id): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append('file', foto);
    formData.append('id', id.toString());
    const req = new HttpRequest('POST', this.url + 'blog/upload', formData,{reportProgress: true});
    return this._http.request(req).pipe(
       catchError(e => {
          return throwError(()=>e);
       })
    );
  

 }
 
}
