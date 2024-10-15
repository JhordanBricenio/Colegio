import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from 'rxjs';
import { Licence } from '../models/licence';

@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  public url;


  constructor(private _http: HttpClient) {
    this.url=GLOBAL.url;
  }

  getLicenses():Observable<Licence[]>{
    return this._http.get<Licence[]>(this.url+'registration');
  }

  getLicenseByDniUser(dni: string):Observable<Licence>{
    return this._http.get<Licence>(this.url+'registration/getByDni/'+dni);
  }

}
