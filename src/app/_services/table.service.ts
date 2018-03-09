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

      // console.log(hot.countRows());
  
      let y = parseInt(coordY, 10);
  
      return hot.getDataAtRow(y);
    }
  }

}
