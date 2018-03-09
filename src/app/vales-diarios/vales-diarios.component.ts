import { LocalStorageService } from './../_services/local-storage.service';
import { TableService } from './../_services/table.service';
import { gastoObj } from './../_helpers/gastoObj';
import { CommonService } from './../_services/common.service';
import { gastos } from './../_models/gastos';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-vales-diarios',
  templateUrl: './vales-diarios.component.html',
  styleUrls: ['./vales-diarios.component.css']
})
export class ValesDiariosComponent implements OnInit {

  valesDiarios: gastos[] = JSON.parse(localStorage.getItem(environment.valeDiario));
  columns = gastoObj;
  valesDiarios$;

  constructor(
    private common: CommonService,
    private table: TableService,
    private local: LocalStorageService) { }

  ngOnInit() {
    // this.getValesDiarios();
  }

  getValesDiarios(): void {
    this.common.getVales(1, environment.valeDiario).subscribe(response => {
      this.valesDiarios = response;
    })
  }

  getValesDiarios$(): void {
    this.valesDiarios$ = this.common.getVales(1, environment.valeDiario);
  }

  onDataChange(): void {
    const row = this.table.getDataAtRow('hotInstance');

    if (row !== undefined) {
      this.local.updateGasto(row, environment.valeDiario)
      this.common.updateGasto(row, 1);
    }
  }

}
