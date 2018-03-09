import { TableService } from './../_services/table.service';
import { gastoObj } from './../_helpers/gastoObj';
import { CommonService } from './../_services/common.service';
import { gastos } from './../_models/gastos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vales-diarios',
  templateUrl: './vales-diarios.component.html',
  styleUrls: ['./vales-diarios.component.css']
})
export class ValesDiariosComponent implements OnInit {

  valesDiarios: gastos[];
  columns = gastoObj;
  valesDiarios$;

  constructor(
    private common: CommonService,
    private table: TableService) { }

  ngOnInit() {
    this.getValesDiarios();
  }

  getValesDiarios(): void {
    this.common.getVales(1, 'diario').subscribe(response => {
      this.valesDiarios = response;
    })
  }

  getValesDiarios$(): void {
    this.valesDiarios$ = this.common.getVales(1, 'diario');
  }

  onDataChange(): void {
    const row = this.table.getDataAtRow('hotInstance');
    console.log(row);
  }

}
