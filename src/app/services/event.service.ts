import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Evento } from '../models/eventos';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public url;


  constructor(private _http: HttpClient) {
    this.url=GLOBAL.url;
  }

  getAllEvents():Observable<Evento[]>{
    return this._http.get<any>(this.url+'event');
  }
  saveEvent(evento:Evento):Observable<any>{
     return this._http.post(this.url+'event', evento);
  }
  getEventById(id):Observable<Evento>{
    return this._http.get<Evento>(this.url+'event/'+id);
  }

  //updateAlumno()
  updateEvento(evento:Evento):Observable<any>{
    return this._http.put(this.url+'event/'+evento.id,evento);
  }

  //deleteAlumno()
  deleteEvento(id):Observable<any>{
    return this._http.delete(this.url+'event/'+id);
  }
  subirFoto(foto: File, id): Observable<HttpEvent<{}>> {
    let formData = new FormData();
    formData.append('file', foto);
    formData.append('id', id.toString());
    const req = new HttpRequest('POST', this.url + 'event/upload', formData,{reportProgress: true});
    return this._http.request(req).pipe(
       catchError(e => {
          return throwError(()=>e);
       })
    );
  

 }
 
}
