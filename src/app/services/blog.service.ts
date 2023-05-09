import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';
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
    return this._http.get<any>(this.url+'tag');
  }
  getPorId(id):Observable<Blog>{
    return this._http.get<Blog>(this.url+'blog/'+id);
  }
}
