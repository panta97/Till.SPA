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
  ingresos: ingresos[];
  columns = ingresoObj;


  constructor(
    private common: CommonService, 
    private table: TableService) { }

  ngOnInit() {
    this.getIngresos();
  }

  getIngresos(): void {
    this.common.getIngresos(1).subscribe(response => {
      this.ingresos = response;
    }); 
  }

  onDataChange(): void {
    const row = this.table.getDataAtRow('hotInstance');
    this.common.updateIngreso(row, 1);
  }

}
