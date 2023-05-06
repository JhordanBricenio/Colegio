import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';
import { Workshop } from '../models/workshop';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {

  public url;

  constructor(private _http: HttpClient) {
    this.url=GLOBAL.url;
  }

  getWorkshops():Observable<Workshop[]>{
    return this._http.get<Workshop[]>(this.url+'workshop');
  }
}
