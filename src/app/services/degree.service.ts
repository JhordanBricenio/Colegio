import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';
import { Degree } from '../models/degree';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  public url;

  constructor(private _http: HttpClient) {
    this.url=GLOBAL.url;
  }

  getDegrees():Observable<Degree[]>{ 
    return this._http.get<Degree[]>(this.url+'degrees');
  }

  getDegree(id):Observable<Degree>{
    return this._http.get<Degree>(this.url+'degrees/'+id);
  }
}
