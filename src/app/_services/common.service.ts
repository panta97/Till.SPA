import { gastos } from './../_models/gastos';
import { ingresos } from './../_models/ingresos';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CommonService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getIngresos(cajaId: number): Observable<ingresos[]> {
    return this.http.get<ingresos[]>(`${this.baseUrl}earnings/${cajaId}`);
  }

  getVales(cajaId: number, type: string): Observable<gastos[]> {

    let params = new HttpParams()
      .set('tillId', `${cajaId}`)
      .set('type', type);


    return this.http.get<gastos[]>(`${this.baseUrl}expenses`, { params });
  }

}