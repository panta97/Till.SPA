import { ingresos } from './../_models/ingresos';
import { environment } from './../../environments/environment';
import { HotRegisterer } from 'angular-handsontable';
import { Injectable } from '@angular/core';

@Injectable()
export class TableService {

  constructor(private _hotRegisterer: HotRegisterer) { }

  getDataAtRow(id: string) {
    const hot = this._hotRegisterer.getInstance(id);
    let coordY, coordX;

    if(hot !== undefined){
      [coordY, coordX] = hot.getSelected();
  
      let y = parseInt(coordY, 10);
  
      return hot.getDataAtRow(y);
    }
  }

  tableReload(id: string): void {
    const hot = this._hotRegisterer.getInstance(id);

    if(hot !== undefined) {
      hot.render();
    }
  }

  valueChanged(arr: any): boolean {

    let toReturn = false;

    let oldValue: ingresos[] = JSON.parse(localStorage.getItem(environment.ingreso));
    oldValue.map((ingreso) => {
      if (ingreso.id === arr[0] && ingreso.amount != arr[3]) {
        toReturn = true;
      }
    })

    return toReturn;
  }

}
