import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Asistencia } from '../models/asistencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  public url;


  constructor(private _http: HttpClient) {
    this.url=GLOBAL.url;
  }

  getAsistencia():Observable<Asistencia[]>{
    return this._http.get<Asistencia[]>(this.url+'asistencias');
  }
  saveAsistencia(asistencias: Asistencia[]):Observable<any>{
    return this._http.post(this.url+'asistencias',asistencias);

  }
}
