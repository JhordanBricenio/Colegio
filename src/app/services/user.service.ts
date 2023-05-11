import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public url;
  
  constructor(private _http: HttpClient) {
    this.url=GLOBAL.url;
  }
  getUsers():Observable<User[]>{
    return this._http.get<User[]>(this.url+'users');
  }

  //createAlumnosAll()
  createAlumnosAll(user:User):Observable<any>{
    return this._http.post(this.url+'users',user);
  }

  //getAlumnoById()
  getAlumnoById(id):Observable<User>{
    return this._http.get<User>(this.url+'users/'+id);
  }

  //updateAlumno()
  updateAlumno(user:User):Observable<any>{
    return this._http.put(this.url+'users/'+user.id,user);
  }

  //deleteAlumno()
  deleteAlumno(id):Observable<any>{
    return this._http.delete(this.url+'users/'+id);
  }
}
