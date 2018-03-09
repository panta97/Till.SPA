import { TableService } from './../_services/table.service';
import { gastoObj } from './../_helpers/gastoObj';
import { CommonService } from './../_services/common.service';
import { gastos } from './../_models/gastos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vales-sistema',
  templateUrl: './vales-sistema.component.html',
  styleUrls: ['./vales-sistema.component.css']
})
export class ValesSistemaComponent implements OnInit {
  valesSistema: gastos[];
  columns = gastoObj;

  constructor(
    private common: CommonService,
    private table: TableService) { }

  ngOnInit() {
    this.getValesSistema();
  }

  getValesSistema(): void {
    this.common.getVales(1, 'sistema').subscribe(response => {
      this.valesSistema = response;
    });
  }

  onDataChange(): void {
    const row = this.table.getDataAtRow('hotInstance');
    this.common.updateGasto(row, 1);
  }

}
