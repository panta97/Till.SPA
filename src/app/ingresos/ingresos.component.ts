import { LocalStorageService } from './../_services/local-storage.service';
import { TableService } from './../_services/table.service';
import { ingresos } from './../_models/ingresos';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../_services/common.service';
import 'rxjs/add/operator/map'
import { ingresoObj } from '../_helpers/ingresoObj';
import * as Handsontable from 'handsontable'


@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresos: ingresos[] = JSON.parse(localStorage.getItem('ingresos'));
  columns = ingresoObj;


  constructor(
    private common: CommonService, 
    private table: TableService,
    private local: LocalStorageService) { }

  ngOnInit() {
    // this.getIngresos();
  }

  getIngresos(): void {
    this.common.getIngresos(1).subscribe(response => {
      this.ingresos = response;
    }); 
  }

  onDataChange(): void {
    const row = this.table.getDataAtRow('hotInstance');

    if (row !== undefined) {
      this.local.updateIngreso(row);
      this.common.updateIngreso(row, 1);
    }

  }

}
