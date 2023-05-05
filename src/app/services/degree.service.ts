import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class DegreeService {

  public url;

  constructor(private _http: HttpClient) {
    this.url=GLOBAL.url;
  }
}
