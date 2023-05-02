import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public url;


  constructor(private _http: HttpClient) {
    this.url=GLOBAL.url;
  }
  getAllEvents():Observable<Event[]>{
    return this._http.get<Event[]>(this.url+'event');
  }
}
