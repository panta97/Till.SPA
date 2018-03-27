import { tallyCreate } from './../_models/tallyCreate';
import { gastoUpdate } from './../_models/gastoUpdate';
import { ingresoUpdate } from './../_models/ingresoUpdate';
import { gastos } from './../_models/gastos';
import { ingresos } from './../_models/ingresos';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { stores } from '../_models/stores';
import { tills } from '../_models/tills';
import { JwtHelperService } from '@auth0/angular-jwt';


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

  updateIngresoVer2(arr: any, cajaId: number): Observable<any> {

    const updatedIngreso: ingresoUpdate = new ingresoUpdate(cajaId, arr[0], +arr[3]);

    return this.http.put<ingresoUpdate>(`${this.baseUrl}earnings`, updatedIngreso);
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

  getStores(): Observable<stores[]> {
    return this.http.get<stores[]>(`${this.baseUrl}stores`);
  }

  getTillsByStore(storeId: number): Observable<tills[]> {
    return this.http.get<tills[]>(`${this.baseUrl}tills/${storeId}`);
  }

  createTally(tillId: number): Observable<any> {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem('token'));

    const userId = +decodedToken.nameid;

    const newTally: tallyCreate = new tallyCreate(0, userId, tillId);

    return this.http.post<tallyCreate>(`${this.baseUrl}tallies`, newTally);

  }

}