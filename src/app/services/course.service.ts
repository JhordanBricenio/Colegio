import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public url;

  constructor(private _http: HttpClient) {
    this.url=GLOBAL.url;
  }

  getCourseId(id:string):Observable<Course>{
    return this._http.get<Course>(this.url+'courses/'+id);
  }

  getCourses():Observable<Course[]>{
    return this._http.get<Course[]>(this.url+'courses');
  }
  save(course:Course):Observable<any>{
    return this._http.post<any>(this.url+'courses', course);

  }
  update(course:Course):Observable<any>{
    return this._http.put<any>(this.url+'courses/'+course.id, course);

  }
}
