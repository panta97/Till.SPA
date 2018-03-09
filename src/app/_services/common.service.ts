import { gastoUpdate } from './../_models/gastoUpdate';
import { ingresoUpdate } from './../_models/ingresoUpdate';
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

  updateIngreso(arr: any, cajaId: number): void {

    const updatedIngreso: ingresoUpdate = new ingresoUpdate(cajaId, arr[0], +arr[3]);

    this.http.put<ingresoUpdate>(`${this.baseUrl}earnings`, updatedIngreso)
      .subscribe(() => {
        console.log('updated successfuly');
      }, () => {
        console.log('there is an error');
      });

  }


  updateGasto(arr: any, cajaId: number): void {

    const updatedGasto: gastoUpdate = new gastoUpdate(cajaId, arr[0], +arr[2], arr[1]);

    this.http.put<gastoUpdate>(`${this.baseUrl}expenses`, updatedGasto)
      .subscribe(() => {
        console.log('updated successfuly');
      }, () => {
        console.log('there is an error');
      });

  }

}