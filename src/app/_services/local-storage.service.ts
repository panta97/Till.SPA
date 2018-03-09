import { ingresos } from './../_models/ingresos';
import { Injectable } from '@angular/core';
import { gastos } from '../_models/gastos';
import { environment } from '../../environments/environment';

@Injectable()
export class LocalStorageService {

  constructor() { }


  updateIngreso(arr: any): void {

    let data: ingresos[] = JSON.parse(localStorage.getItem(environment.ingreso));

    data = data.map((ingreso, index) => {
      if (ingreso.id === arr[0]) {
        // ingreso.id = arr[0];
        // ingreso.type = arr[1];
        // ingreso.denomination = arr[2];
        ingreso.amount = arr[3];

        return ingreso;
      }
      return ingreso;
    });

    localStorage.removeItem(environment.ingreso);
    localStorage.setItem(environment.ingreso, JSON.stringify(data));

  }

  updateGasto(arr: any, gastoType: string): void {

    let data: gastos[] = JSON.parse(localStorage.getItem(gastoType));

    data = data.map((gasto) => {
      if(gasto.id === arr[0]) {
        gasto.description = arr[1];
        gasto.amount = arr[2];

        return gasto;
      }
      return gasto;
    });

    localStorage.removeItem(gastoType);
    localStorage.setItem(gastoType, JSON.stringify(data));
    
  }
}