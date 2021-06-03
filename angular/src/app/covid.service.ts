import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Covi } from './covid';


@Injectable()
export class CovidService {

  _url : string = "http://localhost:3000/api/covi/";

  constructor(private _http: HttpClient) { }

  save(covi:Covi){
    return this._http.post(this._url,covi);
  }
}
