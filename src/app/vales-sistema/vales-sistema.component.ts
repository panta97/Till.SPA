import { LocalStorageService } from './../_services/local-storage.service';
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
  valesSistema: gastos[] = JSON.parse(localStorage.getItem('sistema'));
  columns = gastoObj;

  constructor(
    private common: CommonService,
    private table: TableService,
    private local: LocalStorageService) { }

  ngOnInit() {
    // this.getValesSistema();
  }

  getValesSistema(): void {
    this.common.getVales(1, 'sistema').subscribe(response => {
      this.valesSistema = response;
    });
  }

  onDataChange(): void {
    const row = this.table.getDataAtRow('hotInstance');


    if (row !== undefined) {
      this.local.updateGasto(row, 'sistema');
      this.common.updateGasto(row, 1);
    }
  }

}
